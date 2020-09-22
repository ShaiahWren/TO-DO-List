const host = "lallah.db.elephantsql.com";
const database = "hzluodim";
const user = "hzluodim";
const password = "oAtmjtkAWTvRs28v4UHsBbTEeNuFc7GV";

const pgp = require('pg-promise')( {
    query: function (event)  {
        console.log("QUERY:", event.query)
        
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,

}

const db = pgp(options);

module.exports = db;