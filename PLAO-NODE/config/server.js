// serve para usar o express no nodejs
const express = require ('express');

const msg = require ('../mod_teste');

// serve para atribuir o express a uma variavel 
const app = express();

// serve para usar o ejs 
app.set( 'view engine', 'ejs');
app.set('views','./app/views');

// serve para exportar o conteúdo para ser usado em outros arquivos
module.exports = app;