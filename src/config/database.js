const { Pool } = require('pg');

const {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} = process.env;

const pool = new Pool({
    host: DB_HOST,     // ou IP do servidor
    port: DB_PORT,            // padrão do PostgreSQL
    user: DB_USER,      // seu usuário
    password: DB_PASSWORD, // sua senha
    database: DB_DATABASE // nome do banco
});


const query = async (sql) => {
    const response = await pool.query(sql)
    return response;
}


module.exports = {
    query
}
