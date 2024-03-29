const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const dbRoutes = require('./db');

// API Routes
router.use('/api', apiRoutes);

// DB Routes
router.use('/db', dbRoutes);

// If no API routes are hit, send the React app
router.use((req, resp) => {
  resp.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
