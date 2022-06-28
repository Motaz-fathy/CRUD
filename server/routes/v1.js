const express = require('express')
const countries = require('../controllers/countries')
const router = express.Router()

router.post('/' , countries.Add)
router.post('/:id' , countries.Update)
router.get('/' , countries.GetAll)

module.exports = router 