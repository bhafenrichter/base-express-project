const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

const mustache = require('mustache-express');
// first argument designates what types of files are handled by the mustache
// engine
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

// serve static content to server
// app.use('/img',express.static(path.join(__dirname, 'client/img')));
// app.use('/js',express.static(path.join(__dirname, 'client/js')));
// app.use('/css',express.static(path.join(__dirname, 'client/css')));
app.use('/dist',express.static(path.join(__dirname, 'dist')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index', {test: 'hello world'});
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));