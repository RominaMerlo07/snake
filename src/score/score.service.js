const { Score } = require("../score/score.entity");

const createScore = async(score) => {

    const scoreUser = await Score.create({
        username: score.username,
        puntaje: 0,
    });

    return scoreUser;
};

const getById = async (user) => {
  return await Score.findAll({
    where: { username: user },
  });
};

const updateScore = async (user, score) => {
  return await Score.update(score, {
    where: { username: user },
  });
};

const deleteScore = async (user) => {
  return await Score.destroy({
    where: { username: user },
  });
};

module.exports = { createScore, getById, updateScore, deleteScore }; //permie usar el archv en otros
