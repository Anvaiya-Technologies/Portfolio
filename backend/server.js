// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();

app.use(helmet());
app.use(express.json());

// Enhanced CORS configuration for local development
app.use(cors({
  origin: (origin, cb) => {
    console.log('CORS origin check:', origin); // Debug log
    
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return cb(null, true);
    
    // Local development origins
    const localOrigins = [
      'http://localhost:3000',
      'http://localhost:3001', 
      'http://localhost:5173', // Vite
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001'
    ];
    
    // Check if origin is in config or is a local development URL
    const allowedOrigins = [...(config.corsAllowedOrigins || []), ...localOrigins];
    
    if (allowedOrigins.includes(origin)) {
      console.log('CORS: Origin allowed:', origin);
      return cb(null, true);
    }
    
    // For development environment, be more permissive
    if (config.env === 'development' || process.env.NODE_ENV === 'development') {
      console.log('CORS: Development mode - allowing origin:', origin);
      return cb(null, true);
    }
    
    console.log('CORS: Origin blocked:', origin);
    return cb(new Error('CORS not allowed: ' + origin));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// Connect to MongoDB
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: config.env });
});

// Contact route
app.use('/api/contact', require('./routes/contact'));

// 404 fallback
app.use((req, res) => {
  console.log('404 - Route not found:', req.method, req.path); // Debug log
  res.status(404).json({ error: 'Not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message || err);
  console.error('Request details:', req.method, req.path, req.headers.origin);
  res.status(500).json({ error: 'Server error' });
});

app.listen(config.port, () =>
  console.log(`API listening on port ${config.port}`)
);