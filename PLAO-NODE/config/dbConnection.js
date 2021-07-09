const mysql = require('mysql');
module.exports = () => {
    return connection = mysql.createConnection({
        host: '127.0.0.1:3306',
        user: 'root',
        password: '',
        database: 'plao-node',
    });
}