const express = require('express');
const app = express();
app.use(express.static('public'));




// app.use(function(req, res, next) {res.status(404);res.send('404: Pagina no encontrada');});

app.get('/', (req,res)=>{res.sendFile(__dirname + '/views/home.html');});

app.get('/register',(req,res)=>{res.sendFile(__dirname+'/views/register.html');});

app.get('/login', (req,res)=>{res.sendFile(__dirname + '/views/login.html');});

// app.listen(3000, ()=>{console.log('Server corriendo en puerto 3000');});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server ruining on :3000");
})

/*
app.get ('/',(req,res) => {
    res.send('Prueba!');
});

app.listen(8000, ()=>
    console.log('Levandando un servidor con Express')
);
*/
