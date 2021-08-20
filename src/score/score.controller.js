const scoreService = require('./score.service');

/* const insertScore = async(score) => {

    return await scoreService.insertScore(score);
}
 */

const insertScore = (req, res) => {
    try {
        const scores = req.body;
        scoreService.createScore(scores).then((score) => {
            res.status(200);
            res.send(score);
        }).catch((e) => {
            res.sendStatus("500");
        });

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

module.exports = { insertScore }; //permie usar el archv en otros