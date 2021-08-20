const { Score } = require('../score/score.entity');

/* const insertScore = async(score) => {

    const sc = await Score.create({
        id_user: score.id_user,
        puntaje: score.puntaje
            //fechaPartida: score.fechaPartida
    });

    console.log(sc);

}; */

const createScore = async(score) => {

    const username = score.username;
    const puntaje = 0;

    const scoreUser = await Score.create({
        username,
        puntaje
    });

    return scoreUser;
};

module.exports = { createScore }; //permie usar el archv en otros