const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./expenseRoutes');
const expenseRoutes = require('./incomeRoutes');

router.use('/users', userRoutes);
router.use('/expenses', expenseRoutes);
router.use('/income', expenseRoutes);

module.exports = router;
