const { MySql, DataTypes, Model } = require('../../database/mysql/mySql');

const snakeDB = {
    database: 'snake',
    username: '',
    password: '',
    dbConfig: {
        host: 'localhost' //el puerto entra por default
    }
};

module.exports = { MySql, snakeDB, DataTypes, Model }