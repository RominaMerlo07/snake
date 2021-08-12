const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        return super.init({
            //definir atributos
            id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                primaryKey: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fullname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        }, {
            //definir opciones
            modelName: 'users',
            sequelize,
            timestamps: false,
            createdAt: false,
            updatedAt: false
        })
    }
}

module.exports = { User }