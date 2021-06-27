// No need to change this file
// per Molly Brown with TA Zac Smith, testing needs to be here but I see it already knexfile
const knex = require('knex');
const configurations = require('../knexfile.js');
const environment = process.env.NODE_ENV || 'development';

// What knex configuration is actually used?
// That depends on the value of process.env.NODE_ENV!
module.exports = knex(configurations[environment]);
