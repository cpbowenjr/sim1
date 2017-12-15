require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    ,controller = require('./controller')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/shelf/:id', controller.shelf);
app.get('/api/bin/:id', controller.getBin);
app.put('/api/bin/:id', controller.updateBin)
app.delete('/api/bin/:id', controller.deleteBin)
app.post('/api/bin/:id', controller.addBin)


// app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTIONSTRING).then( db => {
    app.set('db', db)
    // app.get('db').init.seed_file().then(response => {
    //     console.log(response)
    })
    app.listen(process.env.PORT, () => {
        console.log(`listening on port: ${process.env.PORT}`)
    })









