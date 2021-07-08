const app = require('./config/server')
app.get('/', function (req, res){ 
     res.send('<h1>Home Page</h1>')
})
app.listen(3000, function (){
    console.log('Rodando...')
})
app.get('/',function(req, res){
    res.render('home/home')
})
app.get('/noticias',function(req, res){
    res.render('./noticias/notcias')
}) 