module.exports.index = (application, req, res) => {
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDao(connection);
    noticiasDao.get5UltimasNoticias((error, result)=>{
        res.render("home/index", {noticias: result})
    });
}