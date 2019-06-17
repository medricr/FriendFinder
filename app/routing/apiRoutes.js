var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app){

    app.get('/api/friends',function(req,res){
        res.json(friends);
    })

    app.post('/api/friends',function(req,res){
        /*
        get user input data

        parse out the users scores

        compare them to the scores of everyone else in the friend_list array

        determine which of the stored profiles is the best for the user

        display that profile in a modal to the user
         */
    })
}