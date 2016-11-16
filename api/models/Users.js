/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcryptjs');
module.exports = {

    attributes: {
        user_id: {
            type: "integer",
            primaryKey: true,
            autoIncrement: true
        },
        user_login_id: {
            type: "string",
            required: true,
            minLength: 2
        },
        user_password: {
            type: "string",
            required: true,
            minLength: 3
        },
        user_type: {
            type: "string",
            required: true
        },
        is_block: {
            type: "integer",
            required: true
        },
        updated_by: {
            type: "integer",
            required: true
        },
        created_by: {
            type: "integer",
            required: true
        },
        createdAt: {
            type: "datetime",
        },
        updatedAt: {
            type: "datetime",
        }
    },

    beforeCreate: function (values,next) {
        console.log('Before', values.user_password);
        bcrypt.hash(values.user_password, 10, function (err, hash) {
            if (err) return next(err);
            values.user_password = hash;
            console.log('Hash', hash, values.user_password);
            next();
        });
        console.log('After', values.user_password);
        
    }
};