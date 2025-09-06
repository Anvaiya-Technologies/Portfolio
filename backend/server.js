// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();

app.use(helmet());
app.use(express.json());

// CORS using your config
app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true); // allow tools like Postman
    if (config.corsAllowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error('CORS not allowed: ' + origin));
  },
  credentials: true,
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

// Health
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: config.env });
});

// Contact route
app.use('/api/contact', require('./routes/contact'));

// 404 fallback
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Global error handler (basic)
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err.message || err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(config.port, () =>
  console.log(`API listening on port ${config.port}`)
);
