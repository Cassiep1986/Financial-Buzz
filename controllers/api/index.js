const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./expenseRoutes');
const incomeRoutes = require('./incomeRoutes');

router.use('/users', userRoutes);
router.use('/expenses', expenseRoutes);
router.use('/income', incomeRoutes);

module.exports = router;
