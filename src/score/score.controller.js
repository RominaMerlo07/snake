const scoreService = require("./score.service");
const Score = require("./score.entity");

const insertScore = (req, res) => {
  try {
    const scores = req.body;
    scoreService
      .createScore(scores)
      .then((score) => {
        res.status(200);
        res.send(score);
      })
      .catch((e) => {
        res.sendStatus("500");
      });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getById = async (user) => {
  return scoreService.getById(user);
};

const updateScore = async (user, score) => {
  return scoreService.updateScore(user, score);
};

const deleteScore = async (user) => {
  return scoreService.deleteScore(user);
};

module.exports = { insertScore, getById, deleteScore, updateScore }; //permie usar el archv en otros
