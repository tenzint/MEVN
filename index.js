const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
 
const messages = require('./db/messages');

const app = express();
 
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});
 
app.get('/messages', (req, res) => {
    
    console.log("-------------get messages")
    messages.getAll().then((messages) => {
        res.json(messages);
        console.log("-------------get messages")
    });
});

app.post('/messages', (req, res) => {
    console.log("--------post messages")
    console.log(req.body);
    messages.create(req.body).then((message) => {
        res.json(message);
        console.log("-------msg posted")
    }).catch((error
        ) => {
        console.log("------------error caught")
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});