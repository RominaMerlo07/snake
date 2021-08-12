const callSnakeApi = async(url, parameters, data) => {

    let _parameters = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        //credentials: 'same-origin',
        creentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: ''
    };

    _parameters = Object.assign(_parameters, parameters);
    _parameters.body = JSON.stringify(data);

    return fetch(url, _parameters);
}

const getUsers = async() => {
    const url = 'http://localhost:3000/v1/users';
    const parameters = {};
    const res = await callSnakeApi(url, parameters);
    const data = await res.json();

    return data;
}

const createUser = async(user) => {
    const url = 'http://localhost:3000/v1/users/create';
    const parameters = { method: 'POST', body: user };
    const res = await callSnakeApi(url, parameters, user);
    const data = await res.json();
    console.log('data: ' + JSON.stringify(data));
    return data;
}

const updateUser = async(user) => {
    const url = 'http://localhost:3000/v1/users/updateUser/' + user.id;
    const parameters = { method: 'PUT', body: user };
    const res = await callSnakeApi(url, parameters, user);
    const data = await res.json();

    return data;
}

const deleteUser = async(user) => {
    const url = 'http://localhost:3000/v1/users/deleteUser/' + user.id;
    const parameters = { method: 'DELETE', body: user };
    const res = await callSnakeApi(url, parameters, user);
    const data = await res.json();

    return data;
}

/* (async() => {
    // console.log('ver');
    const res = await getUsers();
    console.log(res);
})(); */
export { getUsers, createUser, updateUser, deleteUser };