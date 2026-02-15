from rest_framework import serializers
from .models import Event, Booking
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']


class BookingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    event_title = serializers.CharField(source='event.title', read_only=True)
    
    class Meta:
        model = Booking
        fields = ['id', 'event', 'event_title', 'user', 'quantity', 'total_price', 'payment_status', 'booking_date']


class EventSerializer(serializers.ModelSerializer):
    organizer = UserSerializer(read_only=True)
    booking_count = serializers.SerializerMethodField()
    available_slots = serializers.SerializerMethodField()
    
    class Meta:
        model = Event
        fields = [
            'id', 'title', 'description', 'organizer', 'location', 
            'date', 'capacity', 'price', 'status', 'image', 
            'booking_count', 'available_slots', 'created_at', 'updated_at'
        ]
    
    def get_booking_count(self, obj):
        return obj.bookings.filter(payment_status='completed').count()
    
    def get_available_slots(self, obj):
        booked = obj.bookings.filter(payment_status='completed').aggregate(
            total=models.Sum('quantity')
        )['total'] or 0
        return obj.capacity - booked


class EventDetailSerializer(serializers.ModelSerializer):
    organizer = UserSerializer(read_only=True)
    bookings = BookingSerializer(many=True, read_only=True)
    booking_count = serializers.SerializerMethodField()
    available_slots = serializers.SerializerMethodField()
    
    class Meta:
        model = Event
        fields = [
            'id', 'title', 'description', 'organizer', 'location',
            'date', 'capacity', 'price', 'status', 'image',
            'booking_count', 'available_slots', 'bookings', 'created_at', 'updated_at'
        ]
    
    def get_booking_count(self, obj):
        return obj.bookings.filter(payment_status='completed').count()
    
    def get_available_slots(self, obj):
        from django.db.models import Sum
        booked = obj.bookings.filter(payment_status='completed').aggregate(
            total=Sum('quantity')
        )['total'] or 0
        return obj.capacity - booked
