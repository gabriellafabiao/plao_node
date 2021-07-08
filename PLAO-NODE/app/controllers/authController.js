module.exports.login= (application, req, res)=> {
    const objUsuario = req.body;
    console.log (objUsuario);

    const connection = application.config.dbConnection;
    const usuariosDao = new application.app.models.UsuariosDAO(connection);
    usuariosDao.login(objUsuario,(error,result)=>{
        res.redirect('/Usuario/home');
    });
}