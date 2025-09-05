const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();
app.use(express.json());

app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true); // Tools like curl/Postman
    if (config.corsAllowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error('CORS not allowed: ' + origin));
  },
  credentials: true
}));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: config.env });
});

// TODO: Add real routes here

app.listen(config.port, () =>
  console.log(`API listening on port ${config.port}`)
);