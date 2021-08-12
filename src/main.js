const express = require('express');
const cors = require('cors');
const { User } = require("./users/users.entity");
const { Score } = require("./score/score.entity");


const userRoutes = require('./users/users.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/v1/users', userRoutes);

//HACER EL USE PARA EL SCORE

module.exports = { app, User, Score };