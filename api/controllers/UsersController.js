/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function (req, res) {
        console.log(req.body);
        UserService.login(req.body, function (response) {
            sails.log(response);
            res.json(response)
        });
    },

    create: function (req, res) {
        console.log('Test - 1', req.body);
        Users.create(req.body).exec(function (error, result) {
            if (error) {
                console.log('giri This',error);
            } else {
                console.log('giri This',result);
                res.json(result);
                //return
            }
        });
      //  res.json('Added')
    }
};