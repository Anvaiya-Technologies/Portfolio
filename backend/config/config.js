require('dotenv').config();

console.log("DEBUG .env → MONGODB_URI:", process.env.MONGODB_URI);

const isDevelopment = (process.env.NODE_ENV || 'development') === 'development';

// Default development origins
const defaultDevOrigins = [
  'http://localhost:3000',
  'http://localhost:3001', 
  'http://localhost:5173', // Vite
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001'
];

// Get origins from environment variable
const envOrigins = (process.env.CORS_ALLOWED_ORIGINS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// Combine environment origins with development origins
const corsAllowedOrigins = isDevelopment 
  ? [...envOrigins, ...defaultDevOrigins] 
  : envOrigins;

console.log("DEBUG CORS allowed origins:", corsAllowedOrigins);

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
  corsAllowedOrigins
};