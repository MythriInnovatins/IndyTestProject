const express = require('express');
const bodyParser = require('body-parser');


const app = new express();

const port =8000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./app/ledger')(app, {});

//require('./app/wallets')(app, {});

app.listen(port,()=>
{
    console.log(`we are now on the port ${port}`);
});