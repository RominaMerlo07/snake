let users = [{
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
]

const getUsers = () => {
    return users;
}

const getUserById = (id, res) => {
    users = getUsers();
    const usuario = users.find((t) => t.id === id);

    if (usuario) {
        return usuario;
    } else {
        return `El usuario id: ${id} no existe`;
    }
}


const createUser = (username, fullname, email, password) => {

    const usuario = {
        id: Math.floor(Math.random() * 1000),
        username,
        fullname,
        email,
        password
    };

    users.push(usuario);

    return usuario;

};

module.exports = {
    getUsers,
    getUserById,
    createUser
};