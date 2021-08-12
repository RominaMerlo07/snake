const userService = require("./users.service");


const getUsers = (req, res) => {
    try {
        userService.getUsers().then((users) => {
                res.status(200);
                res.send(users);
            })
            .catch((e) => {
                res.sendStatus("500");
            });
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

const getUsersById = (req, res) => {
    try {
        const nroId = parseInt(req.params.id);
        let user = userService.getUserById(nroId);
        res.status(200);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};



const createUser = (req, res) => {
    try {
        const usuario = req.body;
        userService.createUser(usuario).then((user) => {
            res.status(200);
            res.send(user);
        }).catch((e) => {
            res.sendStatus("500");
        });

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

/* const getUsers = () => {
    return userService.getUsers();
};
 */
/* const getUsersById = (id) => {
    const nroId = parseInt(id);
    return userService.getUserById(nroId);
}; */

/* const getUsers = (req, res) => {

    try {
        let users = userService.getUsers();
        res.status(200);
        res.send(users);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}; */


/* const createUser = (req, res) => {
    try {
        //  const { username, fullname, email, password } = req.body;
        const usuario = req.body;
        //  let user = userControllers.createUser(username, fullname, email, password);
        let user = userService.createUser(usuario);

        res.status(200);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}; */

const updateUser = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const usuario = req.body;
        let user = userService.updateUser(id, usuario);

        res.status(200);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

const deleteUser = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        let user = userService.deleteUser(id);
        res.status(200);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
};