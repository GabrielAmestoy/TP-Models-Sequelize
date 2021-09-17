const express = require('express');
const router = express.Router();

const {list,show} = require('../controllers/actorsController')


/*   /Actors   */
router.get('/list', list);

module.exports = router;