const User = require('./user');
const Income = require('./income');
const Expense = require('./expense');


User.hasMany(Income, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Expense, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


Income.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Expense.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Income, Expense };
