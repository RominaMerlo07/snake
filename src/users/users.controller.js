const userService = require('./users.service');

const getUsers = () => {
    return userService.getUsers();
}

const getUsersById = (id) => {
    const nroId = parseInt(id);
    return userService.getUserById(nroId);
}

const createUser = (username, fullname, email, password) => {
    //validar que tengan algo 


    return userService.createUser(username, fullname, email, password);
    //   const username = req.body.username;
    //   console.log(username);
    //   const fullname = req.body.fullname;
    //   const email = req.body.email;
    //   const password = req.body.password;

    //const { username, fullname, email, password } = req.body;   
}


module.exports = {
    getUsers,
    getUsersById,
    createUser
};