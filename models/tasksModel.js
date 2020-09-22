'use strict';

const db = require('./conn.js');
const bcrypt = require("bcryptjs");


class tasksModel {
    constructor(id, user_name, email, password) {
        this.id = id;
        this.user_name = user_name;
        this.email = email;
        this.password = password;
    }





    
}


module.exports = (tasksModel);