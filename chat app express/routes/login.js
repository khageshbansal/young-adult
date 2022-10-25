let express=require('express');
let router=express.Router();


router.get('/login', (req,res,next)=>{
    let html=
    `<html>
    <title></title>
    <body>
        <h1>Loggin</h1>
        <form action='/chat' method='POST'>
        <input id='input' type='text' name='user' placeholder='Enter username to login'></input>
        <button onclick='clicked()' type='submit'>Login</button>
        </form>  
    </body>
    <script>
    function clicked(){
        let val=document.getElementById("#input");
        localStorage.setItem("user", input.value);
}
    </script>
    </html>`
    res.send(html);
});

module.exports=router;

