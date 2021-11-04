//modelo de datos
const { Model, DataTypes } = require("sequelize"); //importa librerrias

class Score extends Model {
  static init(sequelize) {
    return super.init(
      {
        username: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: true,
        },
        puntaje: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        //colocar las opciones
        modelName: "scores",
        sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      }
    );
  }
}
module.exports = { Score }; //permie usar el archv en otros
