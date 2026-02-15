# EventPro - Frontend & Backend Connection Setup

## ✅ Connection Complete!

The frontend and backend are now fully connected with the following setup:

### Backend (Django REST API)
- **Port:** 8000 (default)
- **Base URL:** http://localhost:8000/api
- **Endpoints:**
  - `GET /api/events/` - List all events
  - `POST /api/events/` - Create new event
  - `GET /api/events/{id}/` - Get event details
  - `POST /api/events/{id}/book/` - Book event tickets
  - `GET /api/bookings/` - List user bookings
  - `GET /api/events/my_events/` - Get user's created events
  - `GET /api/bookings/my_bookings/` - Get user's bookings

### Frontend (React + Vite)
- **Port:** 5173 (default)
- **API Service:** `src/services/api.js`
- **Connected Pages:**
  - EventsList - Fetches and displays events
  - EventDetails - Shows event details and booking
  - Bookings - Displays user's bookings
  - MyEvents - Organizer's created events (ready for connection)

### Configuration
- **CORS Enabled:** Frontend can communicate with backend
- **Database:** SQLite with Event and Booking models
- **Authentication Ready:** Token-based auth configured

## 🚀 Quick Start Guide

### 1. Start Backend Server
```bash
cd c:\Users\akbar\event_pro\backend
# Activate virtual environment (if needed)
.venv\Scripts\activate
# Run server
python manage.py runserver
```

The backend will start at: http://localhost:8000

### 2. Start Frontend Development Server
```bash
cd c:\Users\akbar\event_pro\frontend
npm install  # If not already installed
npm run dev
```

The frontend will start at: http://localhost:5173

### 3. Create Sample Data (Optional)
Access Django admin: http://localhost:8000/admin
- Username: (set via `python manage.py createsuperuser`)
- Create sample events in the admin panel

### 4. Test the Connection
- Navigate to http://localhost:5173/events
- Events will load from the backend API
- Click on any event to view details
- Book tickets to test the API

## 📁 Backend Structure

```
backend/
├── backend/
│   ├── settings.py       # Django settings (CORS configured)
│   ├── urls.py           # Main URL router
│   └── wsgi.py
├── core/
│   ├── models.py         # Event & Booking models
│   ├── views.py          # API ViewSets
│   ├── serializers.py    # DRF Serializers
│   ├── urls.py           # App URL patterns
│   └── admin.py
└── manage.py
```

## 📁 Frontend Structure

```
frontend/
├── src/
│   ├── pages/            # Page components (EventsList, EventDetails, etc.)
│   ├── services/
│   │   └── api.js        # Axios API client (connects to backend)
│   ├── components/       # Reusable components
│   ├── styles/           # Global styles
│   └── App.jsx
└── package.json
```

## 🔌 API Integration Features

### Features Implemented:
- ✅ List all events with pagination
- ✅ View event details
- ✅ Book event tickets with availability checking
- ✅ View user bookings
- ✅ Cancel bookings
- ✅ CORS cross-origin requests
- ✅ Error handling and fallback data
- ✅ Loading states in UI

### Features Ready for Implementation:
- User authentication (login/signup)
- Admin dashboard for managing events
- Payment integration
- Email notifications
- Event filtering and search
- Reviews and ratings

## 🔐 Security Notes

For production:
- Change Django SECRET_KEY
- Set DEBUG=False
- Use environment variables for sensitive data
- Implement proper authentication
- Add rate limiting
- Configure allowed hosts properly

## 📝 Environment Variables

Create `.env` files to override defaults:

**Backend (.env in backend/):**
```
DEBUG=False
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
```

**Frontend (.env in frontend/):**
```
VITE_API_BASE_URL=http://localhost:8000/api
```

## 🐛 Troubleshooting

### Issue: CORS errors in browser console
**Solution:** Ensure backend is running and CORS_ALLOWED_ORIGINS includes your frontend URL

### Issue: Events not loading
**Solution:** 
1. Check backend is running (`python manage.py runserver`)
2. Check browser console for errors
3. Verify API_BASE_URL in `frontend/src/services/api.js`

### Issue: Port already in use
**Solution:**
- Backend: `python manage.py runserver 8001`
- Frontend: `npm run dev -- --port 5174`

## 📚 Next Steps

1. Implement user authentication
2. Add admin dashboard
3. Create event creation form
4. Implement payment processing
5. Add email notifications
6. Deploy to production

---

**Setup Date:** February 13, 2026  
**Status:** ✅ Frontend & Backend Connected
