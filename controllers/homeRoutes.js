const router = require('express').Router();
const { User, Expense, Income } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // // Get all projects and JOIN with user data
    // const projectData = await Project.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // Serialize data so the template can read it
    // const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {  
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/myBudget', async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [Expense, Income],
    });
    const { Expenses, Incomes } = userData.get({ plain: true });
    const totalExpenses = Expenses.map((i) => i.amount).reduce((a, b) => a + b,0);
    const totalIncomes = Incomes.map((i) => i.amount).reduce((a, b) => a + b,0);

    res.render('myBudget', {
      // ...project,
      logged_in: req.session.logged_in,
      totalExpenses,
      totalIncomes
      
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/addBudget', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [ Expense, Income ],
    });
    
    const user = userData.get({ plain: true });
console.log(user)
    res.render('addBudget', {
      ...user,
      income:user.Incomes,
      expenses:user.Expenses,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/myBudget');
    return;
  }

  res.render('login');
});

module.exports = router;
