var express = require('express');
var path = require('path');
// var fs = require('fs');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

require(path.join(__dirname,'app/routing/apiRoutes.js'))(app);
require(path.join(__dirname,'/app/routing/htmlRoutes.js'))(app);

app.listen(PORT,function(){
    console.log('App online...Server listening on port ' + PORT);
})


