var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
require('dotenv').config();

// Models
var { syncAllModels } = require('../services/syncModels');
var postModel = require('../db/models/posts');

// CRUD
var postOperations = require('../db/crud/posts');

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
        // syncAllModels(sequelize);
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
    });

/* GET testing endpoint */
router.get('/ping', function(req, res) {
  res.status(200).send('pong');
});

router.get('/posts', function(req, res ) {
  res.status(200).send('response');
});

/* POST save data to db */
router.post('/', async function(req, res){
  try {
    console.log(req.body);
    var model = postModel(sequelize, Sequelize);
    // save data to the db
    await postOperations.createPost(model, req.body);
    res.status(200).send('success');
  } catch (error) {
    res.status(400).send('Error occured:', error);
  }
});

module.exports = router;
