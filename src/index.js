const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/server.config');
const apiRouter = require('./routes'); 
const errorHandler = require('./utils/ErrorHandler');
const connectToDB = require('./config/db.config');


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());


app.use('/api', apiRouter);
// demo

app.get('/ping', (req,res) =>{
    res.send({"message":"Problem service is alive"})
})

app.use(errorHandler);

app.listen(PORT, async(req,res) =>{
    console.log(`Server is up and running at ${PORT}`);
    await connectToDB();
    console.log(`Successfully connected to DB`);

    


})
 