let express=require('express');
let router=express.Router();
let fs=require('fs');


router.use('/chat', (req,res,next)=>{
    let fileData= fs.readFileSync("message.txt", "utf8");
    let html=
    `<html>
    <title></title>
    <body>
        <h1>Chat</h1>
        <h4>Messages</h4>
        <p>${fileData}</>
        <form action='/post' method='POST' onSubmit=' document.getElementById("user").value= localStorage.getItem("user");'>
        <input type='text' name='message' placeholder='Enter message to chat'></input>
        <input type='hidden' id='user' name='user'></input>
        <button type='submit'>Send</button>
        </form>  
    </body>
    
    </html>`
    res.send(html);
});

router.post('/post', (req,res,next)=>{
    let data=`${req.body.user} : ${req.body.message}  `
    fs.appendFile('message.txt',data , (err) => {
        if (err) {
          console.log(err);
        }
      });
    
 res.redirect('/chat');
});

module.exports=router;