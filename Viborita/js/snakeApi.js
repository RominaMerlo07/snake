let usuario;

const callSnakeApi = async (url, parameters, data) => {
  let _parameters = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    //credentials: 'same-origin',
    creentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: "",
  };

  _parameters = Object.assign(_parameters, parameters);
  _parameters.body = JSON.stringify(data);

  return fetch(url, _parameters);
};

/* USERS */

const getUsers = async () => {
  const url = "http://localhost:3000/v1/users";
  const parameters = {};
  const res = await callSnakeApi(url, parameters);
  const data = await res.json();
  console.log("data: " + JSON.stringify(data));
  return data;
};

const getUserByUsername = async (user) => {
  //  const usuario;
  const url = "http://localhost:3000/v1/users/getUserByUsername/" + user;
  console.log(url);
  const parameters = {};
  const res = await callSnakeApi(url, parameters, user.username);
  const data = await res.json();
  console.log("data: " + JSON.stringify(data));

  data.forEach((element) => {
    usuario = {
      id: element.id,
      username: element.username,
      fullname: element.fullname,
      email: element.email,
      password: element.password,
    };
  });

  console.log(usuario.username);
  return usuario;
};

const createUser = async (user) => {
  const url = "http://localhost:3000/v1/users/create";
  const parameters = { method: "POST", body: user };
  const res = await callSnakeApi(url, parameters, user);
  const data = await res.json();
  console.log("data: " + JSON.stringify(data));
  return data;
};

const updateUser = async (user) => {
  const url = "http://localhost:3000/v1/users/updateUser/" + user.id;
  const parameters = { method: "PUT", body: user };
  const res = await callSnakeApi(url, parameters, user);
  const data = await res.json();

  return data;
};

const deleteUser = async (user) => {
  const url = "http://localhost:3000/v1/users/deleteUser/" + user.id;
  const parameters = { method: "DELETE", body: user };
  const res = await callSnakeApi(url, parameters, user);
  const data = await res.json();

  return data;
};

/* SCORES */

const insertScore = async (score) => {
  const url = "http://localhost:3000/v1/score/create";
  // console.log(url); //la url la arma bien
  const parameters = { method: "POST", body: score };
  // console.log(parameters); // los parameters se envian ok
  const res = await callSnakeApi(url, parameters, score);
  const data = await res.json();
  console.log("data: " + JSON.stringify(data));
  return data;
};

export {
  getUsers,
  getUserByUsername,
  insertScore,
  createUser,
  updateUser,
  deleteUser,
};
