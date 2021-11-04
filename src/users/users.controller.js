const userService = require("./users.service");

const getUsers = (req, res) => {
  try {
    userService
      .getUsers()
      .then((users) => {
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

const getUserByUsername = (req, res) => {
  try {
    const username = req.params.username;
    userService
      .getUserByUsername(username)
      .then((user) => {
        res.status(200);
        res.send(user);
      })
      .catch((e) => {
        res.sendStatus(500);
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
    userService
      .createUser(usuario)
      .then((user) => {
        res.status(200);
        res.send(user);
      })
      .catch((e) => {
        res.sendStatus("500");
      });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const updateUser = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const usuario = req.body;
    userService
      .updateUser(id, usuario)
      .then((user) => {
        res.status(200);
        res.send(user);
      })
      .catch((e) => {
        res.sendStatus("500");
      });
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
  getUserByUsername,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
