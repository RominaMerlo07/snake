const { User } = require("./users.entity");


const getUsers = async() => {
    return await User.findAll();
};

const getUserByUsername = (username) => {

    const usuario = User.findAll({ where: { username: username } });

    console.log('usuario: ' + usuario);
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





/* const getUserPass = async(user) => {
    // users = getUsers();
    const { username, password } = user;

    const usuario = await User.findAll({
        where: {
            [op.and]: [
                { username: username },
                { password: password }
            ]
        }
    });

    if (usuario) {
        return usuario;
    } else {
        return `500`;
    };
};
 */
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

const updateUser = async(pId, usuario) => {

    const user = await User.update(usuario,{
            where: {
                id: pId
            }
        })

        return user;
};

const deleteUser = async(id) => {

    //Obtengo usuario mediante clave primaria
    const userToDelete = await User.findByPk(id);
    
    if (userToDelete === null) {
        return `El usuario id: ${id} no existe`;
    } else {
        const user = userToDelete.destroy();
        return user;
    }
    
}

module.exports = {
    getUsers,
    getUserByUsername,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

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