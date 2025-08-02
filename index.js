require('dotenv').configDotenv()

const express = require('express');

const database = require('./src/config/database')

const app = express()


app.get('/', async (req, res) => {
    const sql = 'select * from culinaria.ingredientes order by nome'
    const response = await database.query(sql);
    res.json(response.rows)
});

const PORT = 3000;
app.listen(PORT, '::', () => {
    console.log(`Listening port ${PORT}`)
})