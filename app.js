const express = require('express')
const epshbs = require('express-handlebars')

const app = express();
const port = 3000

app.engine('handlebars',epshbs({defaultLayout : 'main'})) //複習
app.set('view engine' , 'handlebars')  //複習

app.use(express.static('public'))   //複習

app.get('/',(req,res) =>{
  res.render('index')
})

app.get('/about',(req,res) =>{
const word = 
  {
    name : 'about'
  }
  res.render('show' , {about : word} )
})



app.get('/portfolio',(req,res) =>{
const word = 
  {
    name : 'portfolio'
  }
  res.render('show' , {about : word} )})

app.get('/contact',(req,res) =>{
const word = 
  {
    name : 'contact'
  }
  res.render('show' , {about : word} )})


app.listen(port , ()=>{
console.log(`Express is listening localhost:${port}`);
  
})