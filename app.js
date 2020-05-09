const express = require('express');
const compression = require('compression');
const path = require('path');
const mustache = require('mustache-express');

/* 
  initialize the express app and set the correct
  parameters such as view-engine and publically
  accessible folders
*/
const app = express();
const port = process.env.PORT || 3000;
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

// compress the files on the server
app.use(compression());

/* 
STATIC CONTENT
  serve static content via gzip compression relies 
  on compression-webpack-plugin creates a .gz clone of 
  the file that gets unzipped and served to the user
*/

app.get('*.js', (req, res, next) => {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	next();
});

// serve static content to server
app.use('/dist',express.static(path.join(__dirname, 'dist')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index', {test: 'hello world'});
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));