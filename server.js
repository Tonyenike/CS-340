/*
 *  Server code.
 *  
 *  Required packages:	express
 *  			express-handlebars
 *  			handlebars
 *  			socket.io
 *
 *  Our built-in 'package': engine.js. This is where our back-end code will be.
 *
 *  type "npm install [package-name]" to install the package
 *
 *  If you pull the entire repository from github, then all the packages should
 *  already be installed. It is on you, however, to ensure that you have
 *  npm on whatever computer that you are running on. If you run the code
 *  on the ENGR server, the npm tool is already installed.
 *
 *  Type: "npm start" to run the server.
 * 
 */



var express = require('express');
var app = express();
var server = require('http').Server(app);
var handlebars = require('express-handlebars');
var func = require('./engine.js'); // This lets us use the functions/variables that we have built on the back end.
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');
app.set('mysql', mysql);
app.use(bodyParser.urlencoded({extended:true}));
app.use('/customer', require('./customer.js'));
app.use('/employee', require('./employee.js'));


var url = require('url');


var port = 4200; // When running the server, type "localhost:[port-number]" in your address bar to see the webpage.

var engineObj = new func();

/*
 *  Create socket connection to the client side JS. 
 *  Begin listening on port [port-number].
 */ 

var io = require('socket.io').listen(app.listen(port, function() {
    console.log('== Server is listening on port', port);
    console.log('Querytext10 is', engineObj.queryText10);
}));

/*
* Set up handlebars
*/

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


/*
 *   The main page is set to index.handlebars
 */

app.get('/', function(req, res) {
	context = {style: "./index.css"};
    	res.status(200).render('index.handlebars', context);
});

/*
 *   Load each of the two UI pages if the user requests it.
 */


/*
*   Use the public folder for styling assets and javascript.
*/

app.use(express.static('public'));

/*
*  If the content that the user requests doesn't exist, send a 404 error.
*/


app.get('*', function(req, res) {
	res.status(404).render('404.handlebars');
});
