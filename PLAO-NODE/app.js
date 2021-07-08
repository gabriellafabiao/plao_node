const app = require('./config/server')
// Chamando as rotas
const rotaHome = require('./app/routes/home')
rotaHome(app)


const rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)

const rotaFormAddNoticia = require('./app/routes/form_add_noticias')
rotaFormAddNoticia(app) 

app.get('/', function (req, res){ 
     res.send('<h1>Bem vindo a página inicial</h1>')
})
app.listen(3000, function (){
    console.log('Rodando...')
})



