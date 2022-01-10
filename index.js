const env = process.env;
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    let result = '';

    Object.keys(env).forEach((key) => {
        result += key + '="' + env[key] + '"' + '<br>'
    })
    res.send(result)
})

app.listen(port, () => {
    console.log(`Server started ${port}`);
})