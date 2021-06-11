const express = require('express');
const app = express();
const router = express.Router();
const userControllers = require('./users.controller');


router.get('/', (req, res) => {

    try {
        let users = userControllers.getUsers();
        res.status(200);
        res.send(users);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

});

router.get('/:id', (req, res) => {

    try {
        let user = userControllers.getUsersById(req.params.id);
        //app.get('/:id', userControllers.getUsersById)
        res.status(200);
        res.send(user);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

});

router.post('/create', (req, res) => {

    try {
        const { username, fullname, email, password } = req.body;
        let user = userControllers.createUser(username, fullname, email, password);
        res.status(200);
        res.send(user);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

});

module.exports = router;