const { User } = require("./users.entity");

const getUsers = async () => {
  return await User.findAll();
};

const getUserByUsername = (username) => {
  const usuario = User.findAll({ where: { username: username } });

  console.log("usuario: " + usuario);
  return usuario;
};

const getUserById = (id) => {
  users = getUsers();
  const usuario = users.find((t) => t.id === id);

  if (usuario) {
    return usuario;
  } else {
    return `El usuario id: ${id} no existe`;
  }
};

const createUser = async (usuario) => {
  console.log(usuario);
  const { username, fullname, email, password } = usuario;

  const user = await User.create({
    //id: Math.floor(Math.random() * 1000),
    username,
    fullname,
    email,
    password,
  });

  return user;
};

const updateUser = async (pId, usuario) => {
  const user = await User.update(usuario, {
    where: {
      id: pId,
    },
  });

  return user;
};

const deleteUser = async (id) => {
  //Obtengo usuario mediante clave primaria
  const userToDelete = await User.findByPk(id);

  if (userToDelete === null) {
    return `El usuario id: ${id} no existe`;
  } else {
    const user = userToDelete.destroy();
    return user;
  }
};

module.exports = {
  getUsers,
  getUserByUsername,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
