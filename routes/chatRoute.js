const router = require('express').Router();
// const controller = require('../Controller/controller.js')

// router.post('/register', controller.register)
// router.post('/login', controller.login)
// router.post('/verify', controller.verify)
// router.delete('/:email', controller.delete)
const controller = require('../controller/chat')

router.get('/', controller.chatting);
module.exports = router;