/**
 * Created by 78248 on 2017/2/9.
 */
var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');

module.exports = mongoose.model('User', usersSchema);