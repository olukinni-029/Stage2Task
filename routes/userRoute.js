const express = require('express');
const { newPerson, findPerson, updatePerson, deletePerson } = require('../controller/userController');

const router = express.Router();

router.post('/api',newPerson);
router.get('/api/:user_id',findPerson);
router.put('/api/:user_id',updatePerson);
router.delete('/api/:user_id',deletePerson);

module.exports = router;