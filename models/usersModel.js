'use strict';

const db = require('./conn.js');
const bcrypt = require("bcryptjs");


class usersModel {
    constructor(id, user_name, email, password) {
        this.id = id;
        this.user_name = user_name;
        this.email = email;
        this.password = password;
    }

    // bcrypt can be SLOOOOOWW, so we'll wrap this in an async
    async checkPassword(hashedPassword) {
        // syntax: bcrypt.compareSync(arg1, arg2);
        // first argument is what the user put in the form
        // second argument is the hashed password
        // returns true or false
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async save() {
        try {
            const response = await db.one(`
                insert into users 
                    (user_name, email, password)
                values
                    ($1, $2, $3)
                returning id
                `, [this.user_name, this.email, this.password]);
            console.log("user was created with id:", response.id);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    async login() {
        try {
            const response = await db.one(`
                select id, user_name, password
                    from users
                where email = $1`, [this.email]);
            const isValid = await this.checkPassword(response.password);
            if (!!isValid) {        
            // if (isValid === absolutely, totally, like really, true)
                // destructure the values we want from the response
                const { user_name, id } = response;
                // this line will return the isValid, first name, last name, and user id
                return { isValid, user_name, user_id: id }
            } else {
                // Just return the false isValid
                return { isValid }
            };
        } catch(err) {
            return err.message;
        }
    }
}

module.exports = usersModel;