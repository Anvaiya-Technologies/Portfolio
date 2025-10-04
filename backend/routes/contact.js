// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const rateLimit = require('express-rate-limit');

// basic rate limiter to avoid spam
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // max 10 requests per minute (adjust as needed)
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/', limiter, async (req, res) => {
  try {
    const { name, email, phoneNumber, phone, message } = req.body;

    // pick whichever is provided (phoneNumber preferred, fallback to phone)
    const finalPhoneNumber = phoneNumber || phone;

    // very basic server-side validation
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: 'name, email and message are required' });
    }

    if (!finalPhoneNumber) {
      return res
        .status(400)
        .json({ error: 'phoneNumber (or phone) is required' });
    }

    const doc = new Contact({
      name: String(name).trim(),
      email: String(email).trim(),
      phoneNumber: String(finalPhoneNumber).trim(),
      message: String(message).trim(),
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      source: 'website',
    });

    await doc.save();

    // Optional: you could trigger a notification/email here
    return res.status(201).json({ success: true, id: doc._id });
  } catch (err) {
    console.error('Contact save error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
