const { application } = require("express");

module.exports.noticias = (application, req, res) =>{
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDao(connection);
    noticiasDao.getNoticias((error, result)=>{
        res.render("noticias/noticias", {noticias: result});
    });
}

module.exports.noticias = (application, req, res) =>{
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDao(connection);
    const id_noticia = req.query;

    noticiasDao.getNoticias(id_noticia,(error, result)=>{
        res.render("noticias/noticia", {noticia: result});
    });
}

module.exports.formulario_inclusao_noticia = (application, req, res)=>{
    res.render("noticias/form_add_noticia", {validacao: {}, noticia: {}});
}

module.exports.noticias.salvar = (application, req, res)=>{
    var noticia = req.body;
    req.assert('titulo', 'Título da notícia é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty();
    req.assert('data_noticia', 'Formato da data está inadequado').isDate();
    req.assert('noticia', 'Noticia é obrigatório').notEmpty();
    const erros = req.validationErrors();

    if (erros){
        res.render("noticias/form_add_noticia", { validacao: erros, noticia: noticia})};
        return;
}
const connection = application.config.dbConnection;
const noticiasDao = new application.app.models.NoticiasDao(connection);
noticiasDao.salvarNoticia(noticia,(error, result)=> {
    res.redirect('/noticias');
});

