const express = require('express')
const router = express.Router()

const appointController = require('../controllers/appointment-controller')

router.get('/webappointment', appointController.getHospitals)

router.use('/', (req, res) => res.redirect('/webappointment'))

module.exports = router