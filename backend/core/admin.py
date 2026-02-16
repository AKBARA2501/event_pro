from django.contrib import admin
from .models import Event, Booking

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'organizer', 'date', 'status', 'capacity')
    list_filter = ('status', 'date')
    search_fields = ('title', 'description')

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('event', 'user', 'quantity', 'total_price', 'payment_status', 'booking_date')
    list_filter = ('payment_status', 'booking_date')
    search_fields = ('event__title', 'user__username')
