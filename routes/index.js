const router = require('express').Router();


const thoughtRoutes = require('./thoughts_routes');
const userRoutes = require('./user_routes');

router.use('./api/users', userRoutes);
router.use('.api/thoughts', thoughtRoutes);

module.exports = router;
