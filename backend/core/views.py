from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.db.models import Sum
from .models import Event, Booking
from .serializers import EventSerializer, EventDetailSerializer, BookingSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return EventDetailSerializer
        return EventSerializer
    
    def perform_create(self, serializer):
        serializer.save(organizer=self.request.user)
    
    @action(detail=False, methods=['get'])
    def my_events(self, request):
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        
        events = Event.objects.filter(organizer=request.user)
        serializer = self.get_serializer(events, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def dashboard(self, request):
        user_events = Event.objects.filter(organizer=request.user)
        total_events = user_events.count()
        
        # Total attendees for events managed by this user
        total_attendees = Booking.objects.filter(
            event__organizer=request.user,
            payment_status='completed'
        ).aggregate(total=Sum('quantity'))['total'] or 0
        
        # Total revenue for events managed by this user
        total_revenue = Booking.objects.filter(
            event__organizer=request.user,
            payment_status='completed'
        ).aggregate(total=Sum('total_price'))['total'] or 0
        
        recent_events = user_events.order_by('-created_at')[:5]
        recent_serializer = self.get_serializer(recent_events, many=True)
        
        return Response({
            'total_events': total_events,
            'total_attendees': total_attendees,
            'total_revenue': float(total_revenue),
            'recent_events': recent_serializer.data
        })
    
    @action(detail=True, methods=['get'], permission_classes=[IsAuthenticated])
    def attendees(self, request, pk=None):
        event = self.get_object()
        if event.organizer != request.user:
            return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
        
        bookings = Booking.objects.filter(event=event, payment_status='completed')
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def book(self, request, pk=None):
        event = self.get_object()
        quantity = request.data.get('quantity', 1)
        
        try:
            quantity = int(quantity)
            if quantity < 1:
                return Response({'error': 'Quantity must be at least 1'}, status=status.HTTP_400_BAD_REQUEST)
        except (ValueError, TypeError):
            return Response({'error': 'Invalid quantity'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check available slots
        booked = event.bookings.filter(payment_status='completed').aggregate(
            total=Sum('quantity')
        )['total'] or 0
        available = event.capacity - booked
        
        if quantity > available:
            return Response(
                {'error': f'Only {available} slots available'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        total_price = event.price * quantity
        
        booking, created = Booking.objects.update_or_create(
            event=event,
            user=request.user,
            defaults={
                'quantity': quantity,
                'total_price': total_price,
                'payment_status': 'completed'
            }
        )
        
        serializer = BookingSerializer(booking)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)


class BookingViewSet(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def my_bookings(self, request):
        bookings = Booking.objects.filter(user=request.user)
        serializer = self.get_serializer(bookings, many=True)
        return Response(serializer.data)
