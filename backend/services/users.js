const User = require('../models/users');
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;

const prepareUser = function(user, next) {
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            user.salt = salt
            next();
        });
    });
}

const saveUserToDB = async function(user){
    prepareUser(user, err => {
        if (err != null) {
            console.log("error preparing user.")
            return Promise.reject();
        }
        user = new User(user);
        user.save().then(() => {
            console.log("user created successfully");
            return Promise.resolve();
        });
    });
}
module.exports = { saveUserToDB };