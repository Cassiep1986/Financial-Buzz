const { ExpressHandlebars } = require('express-handlebars');
const router = require('express').Router();


///removed withAuth
router.get('/', async (req, res) => {
  try {
    res.render('login', {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;0