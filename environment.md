# Environment Setup

## Frontend (Create React App)
Create frontend/.env from frontend/.env.example:
```
cp frontend/.env.example frontend/.env
```
Edit REACT_APP_API_BASE_URL if your local backend runs on a different port.

## Backend (after adding `server/`)
Create server/.env from server/.env.example and fill:
- MONGODB_URI
- JWT_SECRET
- SESSION_SECRET

Generate secrets:
```
openssl rand -base64 48
```

Do not commit real `.env` files. Only commit the `*.env.example` templates.

## Production
- Vercel → REACT_APP_API_BASE_URL=https://api.anvaiyatechnologies.tech
- Render → MONGODB_URI, JWT_SECRET, SESSION_SECRET, CORS_ALLOWED_ORIGINS