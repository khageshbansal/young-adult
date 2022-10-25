let express=require('express');
let app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
let fs=require('fs');

let login=require('./routes/login');
let chat=require('./routes/chat');


app.use(login);
app.use(chat);

app.use((req,res,next)=>{
    res.send('Welcome to chat app now go to /login url')
});

app.listen(4000, ()=>{console.log('server started at 4000')
});