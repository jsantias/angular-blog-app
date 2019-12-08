var path = require('path');
var basename = path.basename(__filename);
var fs = require('fs');
var Sequelize = require('sequelize');

/* 
* If executed from app.js, will remove the db tables 
* and create new tables based on the defined models
* in ../db/models/
*
* params
*   @sequelize - sequelize object
*
* returns - response if processed correctly or
*/
async function syncAllModels(sequelize) {
  try {
    fs
    .readdirSync('./db/models')
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
      var i = require('../db/models/' + file);
      var model = i(sequelize, Sequelize);
      model.sync({ force: true })
        .then(response => {
          return response;
        })
    })
  } catch (e) {
    return e;
  }
  
}


module.exports = {
  syncAllModels
}