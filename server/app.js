var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Sequelize = require('sequelize');

// Router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Load environment variables
require('dotenv').config()

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        // Specify whether or not the 'createdAt' and 'updatedAt' fields will be created
        timestamps: true
    }
});

// authenticate and connect to db
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');

        // Refresh database model (DROPS and CREATES all tables) - REMOVES ALL DATA
        // Comment out to prevent data loss
        syncAllModels(sequelize);
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
    });

// Models
var { syncAllModels } = require('./services/syncModels');

module.exports = app;
