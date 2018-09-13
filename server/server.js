//requires
const express = require('express');
const app = express();

//globals
const PORT = 5000;
//uses
app.use(express.static('server/public'));
//spin up server

app.listen(PORT, ()=>{
    console.log('SERVER UP AND RUNNING ON PORT: ', PORT);
    
})