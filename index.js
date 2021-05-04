const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sgh1939:gks1111@cluster1.tvgiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log('Example app listening on port ' + port))