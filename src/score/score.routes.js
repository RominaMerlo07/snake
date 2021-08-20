const express = require('express');

const router = express.Router();

const scoreController = require('./score.controller')


router.post('/create', scoreController.insertScore);


/* router.post('/create/:id', (req, res) => {
    const score = req.body;
    try {
        //let nuevo = controller.createUser(user);
        scoreController.insertScore(score).then((nuevo) => {
            res.status(200);
            res.send(nuevo);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}) */
module.exports = router;