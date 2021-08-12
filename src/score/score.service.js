const { Score } = require('./score.entity');

const insertScore = async(score) => {

    const sc = await Score.create({
        id_user: score.id_user,
        puntaje: score.puntaje
            //fechaPartida: score.fechaPartida
    });

    console.log(sc);

}

module.exports = { insertScore }; //permie usar el archv en otros