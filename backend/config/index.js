require('dotenv').config();

function get(name, fallback, required = false) {
  const v = process.env[name];
  if ((v === undefined || v === '') && required) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return v !== undefined && v !== '' ? v : fallback;
}

module.exports = {
  env: get('NODE_ENV', 'development'),
  port: parseInt(get('PORT', '3000'), 10),
  mongoUri: get('MONGODB_URI', null, true),
  jwtSecret: get('JWT_SECRET', null, true),
  sessionSecret: get('SESSION_SECRET'),
  corsAllowedOrigins: (get('CORS_ALLOWED_ORIGINS', '') || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
};