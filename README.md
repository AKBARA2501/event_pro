# EventPro - Event Management Platform

A full-stack event management platform built with Django REST Framework backend and React frontend.

## 📁 Project Structure

```
event_pro/
├── backend/                 # Django REST API
│   ├── manage.py
│   ├── backend/            # Django project settings
│   ├── core/               # Main app (models, views, serializers)
│   ├── requirements.txt    # Python dependencies
│   └── .env.example        # Backend environment variables
├── frontend/               # React + Vite
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── services/      # API service (api.js)
│   │   └── styles/        # CSS files
│   ├── package.json
│   └── .env.example       # Frontend environment variables
├── package.json            # Root package.json (monorepo)
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Python 3.12+
- Node.js 16+
- npm or yarn

### Installation

1. **Clone and setup dependencies:**
   ```bash
   cd c:\Users\akbar\event_pro
   npm install
   ```

   This will install:
   - Root dependencies (concurrently for running both servers)
   - Backend dependencies (Django, DRF, CORS)
   - Frontend dependencies (React, Axios, React Router)

   Or manually:
   ```bash
   # Backend
   cd backend
   pip install -r requirements.txt
   python manage.py migrate
   
   # Frontend
   cd ../frontend
   npm install
   ```

2. **Environment Setup:**
   - Copy backend `.env.example` to `.env` (optional)
   - Copy frontend `.env.example` to `.env` (optional)

### Development

**Option 1: Run both servers together (recommended)**
```bash
npm run dev
```

This runs:
- Backend: http://localhost:8000
- Frontend: http://localhost:5173

**Option 2: Run separately**

Terminal 1 (Backend):
```bash
npm run backend:dev
# or
cd backend && python manage.py runserver
```

Terminal 2 (Frontend):
```bash
npm run frontend:dev
# or
cd frontend && npm run dev
```

### Database Migrations

```bash
# Create migrations
npm run backend:makemigrations

# Apply migrations
npm run backend:migrate
```

Or directly:
```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```

### Creating a Superuser (Admin)

```bash
cd backend
python manage.py createsuperuser
```

Then access admin at: http://localhost:8000/admin

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both backend and frontend
- `npm run install-all` - Install all dependencies
- `npm start` - Alias for `npm run dev`

### Backend
- `npm run backend:dev` - Start Django development server
- `npm run backend:migrate` - Run database migrations
- `npm run backend:makemigrations` - Create migration files

### Frontend
- `npm run frontend:dev` - Start React dev server
- `npm run frontend:build` - Build for production

## 📡 API Endpoints

Base URL: `http://localhost:8000/api`

### Events
- `GET /events/` - List all events
- `POST /events/` - Create event (authenticated)
- `GET /events/{id}/` - Get event details
- `PATCH /events/{id}/` - Update event (owner only)
- `DELETE /events/{id}/` - Delete event (owner only)
- `POST /events/{id}/book/` - Book event (authenticated)
- `GET /events/my_events/` - Get user's events (authenticated)

### Bookings
- `GET /bookings/` - List user's bookings (authenticated)
- `GET /bookings/{id}/` - Get booking details
- `DELETE /bookings/{id}/` - Cancel booking
- `GET /bookings/my_bookings/` - Get user's bookings

### Admin
- `GET /admin/` - Django admin panel

## 🔐 Environment Variables

### Backend (.env)
```env
DEBUG=True
SECRET_KEY=your-secret-key-change-in-production
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173
DATABASE_URL=sqlite:///db.sqlite3
```

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

## 📦 Dependencies

### Backend
- Django 6.0.2
- djangorestframework 3.14.0
- django-cors-headers 4.3.1

### Frontend
- React 18.2.0
- React Router DOM 6.8.0
- Axios 1.3.0
- Vite 4.2.0

### Root
- concurrently 8.2.0 (for running both servers)

## 🛠️ Troubleshooting

### CORS Errors
Ensure backend `CORS_ALLOWED_ORIGINS` includes your frontend URL:
```python
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
]
```

### Port Already in Use
```bash
# Backend on different port
cd backend && python manage.py runserver 8001

# Frontend on different port
cd frontend && npm run dev -- --port 5174
```

### Database Issues
```bash
# Reset database (careful!)
cd backend
rm db.sqlite3
python manage.py migrate
```

## 📚 Features

- ✅ Event listing and discovery
- ✅ Event details and booking
- ✅ User bookings management
- ✅ Event organizer dashboard
- ✅ User authentication ready
- ✅ REST API with DRF
- ✅ CORS enabled for frontend communication

## 🚀 Production Deployment

Before deploying:

1. Set `DEBUG=False` in backend `.env`
2. Update `SECRET_KEY` with a secure value
3. Update `ALLOWED_HOSTS` with your domain
4. Update `CORS_ALLOWED_ORIGINS` with your frontend domain
5. Use a production database (PostgreSQL recommended)
6. Build frontend: `npm run frontend:build`
7. Serve frontend files as static assets

## 📝 Contributing

1. Create a feature branch
2. Make your changes
3. Test both backend and frontend
4. Submit a pull request

## 📄 License

MIT

## 👥 Support

For issues or questions, please open an issue in the repository.

---

**Setup Date:** February 13, 2026  
**Status:** ✅ Connected Monorepo Structure
