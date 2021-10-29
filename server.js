const { app, User, Score } = require('./src/main'); //PASARLE SCORE
const { MySql, snakeDB } = require('./src/conexiones/snakeDB');


app.listen(3000, () => console.log('Server listen port 3000..'));

const initMySql = async(login) => {
    try {
        let configDB = {
            database: snakeDB.database,
            username: login.username,
            password: login.password,
            dbConfig: snakeDB.dbConfig
        };
        // configDB = Object.assign(snakeDB, configDB);
        // console.log(configDB);
        mysql = new MySql(configDB);

        //testDB
        console.log('test MySql');
        await mysql.authenticate();
        console.log('Conexion exitosa');

        //User
        User.init(mysql);
        Score.init(mysql);

    } catch (e) {
        console.log(e);
    }
}

initMySql({ username: 'romina', password: '123456' });
//initMySql({ username: 'romina', password: '123456' });