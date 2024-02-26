const express = require('express')
const app = express()
const core = require("cors")
const { createConnection } = require('mysql')
const port = 3000

app.use(cors())
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "db_todo"
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))