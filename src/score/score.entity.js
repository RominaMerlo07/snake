//modelo de datos
const { Model, DataTypes } = require("sequelize"); //importa librerrias

class Score extends Model {
    static init(sequelize) {
        return super.init({
            id_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            puntaje: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            //colocar las opciones

            modelName: "scores",
            sequelize,
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        });
    }
}
module.exports = { Score }; //permie usar el archv en otros