// serve para usar o express no nodejs
const express = require ('express');

const consig = require('consig');
const bodyPaser = require ('body-paser');
const expressValidator = require('express-validator');
const session = require('express-session');
const msg = require ('../mod_teste');

// serve para atribuir o express a uma variavel 
const app = express();

// serve para usar o ejs 
app.set( 'view engine', 'ejs');
app.set('views','./app/views');

app.use(express.static('./app/public'));
app.use(bodyPaser.urlenconded ({extended: true}));
app.use (expressValidator());
app.use(session({
    secret: 'keyboard cat', resave: false
}));

consig()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app');
// serve para exportar o conteúdo para ser usado em outros arquivos
module.exports = app;