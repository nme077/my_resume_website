const express = require('express'),
      router = express.Router(),
      middleware = require('../middleware');


// Show all
router.get('/', (req, res) => {
    res.render('../views/portfolio/index');
});





module.exports = router;