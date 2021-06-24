//ORM

const { Sequelize, DataTypes, Model } = require('sequelize');

const dbConfig = {
    host: '',
    dialect: 'mysql'
};

//objeto hijo "MySql" de Sequelize (no es necesario pero nos permite customizar sequelize)
class MySql extends Sequelize {
    constructor(config) {
        super(config.database, config.username, config.password, Object.assign(dbConfig, config.dbConfig));
        this.config = {
            database: '',
            username: '',
            password: '',
            dbConfig: dbConfig
        };


        this.config = Object.assign(this.config, config);
    }
};

module.exports = { MySql, DataTypes, Model }