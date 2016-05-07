// Local dependencies
//Tells the computer where to find the pages at
var controllers = require('./controllers');

var Router = {

    init: function(app) {

        // Home page
        app.get('/', controllers.Home.index);

        // About page
        app.get('/about', controllers.About.index);
        
        //Search
        app.get('/search', controllers.Search.index);


    }

};

module.exports = Router;
