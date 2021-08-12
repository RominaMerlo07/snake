const scoreService = require('./score.service');

const insertScore = async(score) => {

    return await scoreService.insertScore(score);
}
module.exports = { insertScore }; //permie usar el archv en otros