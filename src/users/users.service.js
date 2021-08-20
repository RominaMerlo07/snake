const { User } = require("./users.entity");

/* let users = [{
        id: 1,
        username: 'adri',
        fullname: 'Adrian Ojeda',
        email: 'aojeda@claro.com.ar',
        password: '123'
    },
    {
        id: 2,
        username: 'adri2',
        fullname: 'Adrian Ojeda',
        email: 'aojeda@claro.com.ar',
        password: '12366'
    }
]; */

/* const getUsers = () => {
    return users;
}; */

const getUsers = async() => {
    return await User.findAll();
};

/* const getUserById = (id) => {
    users = getUsers();
    const usuario = users.find((t) => t.id === id);

    if (usuario) {
        return usuario;
    } else {
        return `El usuario id: ${id} no existe`;
    }
};
 */
const getUserById = async(id) => {
    // users = getUsers();
    const usuario = await User.findAll({
        where: {
            id: {
                [Op.eq]: id
            }
        }
    });

    if (usuario) {
        return usuario;
    } else {
        return `El usuario id: ${id} no existe`;
    }
};

const getUserByUsername = async(username) => {
    // users = getUsers();
    const usuario = await User.findAll({
        where: {
            username: {
                [Op.eq]: username
            }
        }
    });

    if (usuario) {
        return usuario;
    } else {
        return `El usuario ${username} no existe`;
    }
};


const createUser = async(usuario) => {

    console.log(usuario);
    const { username, fullname, email, password } = usuario;

    const user = await User.create({
        //id: Math.floor(Math.random() * 1000),
        username,
        fullname,
        email,
        password
    });

    return user;
};


/* const createUser = (usuario) => {

    const { username, fullname, email, password } = usuario;

    const user = {
        id: Math.floor(Math.random() * 1000),
        username,
        fullname,
        email,
        password
    }

    users.push(user);

    return user;

};
 */

const updateUser = (id, usuario) => {

    const { username, fullname, email, password } = usuario;
    const idx = users.findIndex((p) => p.id === id);


    if (idx >= 0) {
        users[idx].username = username || users[idx].username;
        users[idx].fullname = fullname || users[idx].fullname;
        users[idx].email = email || users[idx].email;
        users[idx].password = password || users[idx].password;
        /*TODO LO ANTERIOR SE PUEDE SIMPLICAR CON LA SIGUIENTE LINEA 
          USANDO EL SPREAD: */
        /*  users[idx] = {...users[idx], username, fullname, email, password }; */
        return users[idx];
    } else {
        return `El usuario id: ${id} no existe`;
    }
};

const deleteUser = (id) => {
    const idx = users.findIndex((p) => p.id === id);
    if (idx >= 0) {
        // users.splice(idx, 1);
        const user = users.splice(idx, 1)[0];
        return user;
    } else {
        return `El usuario id: ${id} no existe`;
    }
}

module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    createUser,
    updateUser,
    deleteUser
};