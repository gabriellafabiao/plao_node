module.exports = function(app){
    app.get('/noticias',function(req, res){
        res.render('./noticias/noticias')
    }) 
    const mysql = require ('mysql');
    const connection = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: 'noticiasdb'
    });
    connection.query('select * from noticias', function(erro,result){
        res.send(result);

    });
}


