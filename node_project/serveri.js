// // const http=require('http')
// // const server=http.createServer((req,res)=>{//request and response are object
// //    res.write('hello nodejs!!!!!')
// //    res.end();
// //  })
// //  .listen(3000,()=>{
// //    console.log("Server is Running on Port : 3000")
// //  } )




// const express =require('express')
// const Path=require('path')
// const app=express()


// app.use(express.static('public'))//for static files


// let middleware = (req, res, next) => {
//     console.log("Middleware executed 1");
//     next();
// };
// let middleware2 = (req, res, next) => {
//     console.log("Middleware executed 2");
//     next();
// };

// app.get('/',(req,res)=>{
//     res.send('Hello World!!!')
// })
// app.get('/home',(req,res)=>{
//     res.sendFile(Path.join(__dirname,'public','index.html'))
// })

// app.get('/images',(req,res)=>{
//     res.sendFile('img.png')
// })
// app.get('/blog',middleware,(req,res)=>{
//     res.send('Blog page')

// })
// app.get('/contact',middleware2,(req,res)=>{
//     res.send('Contact page')
// })

// //route params
// app.get('/user/:name',(req,res)=>{
//     res.send('User name : '+req.params.name)
// })
// //query params
// app.get('/search',(req,res)=>{
//     res.send('Search Query : '+req.query.name)
// })
// app.get('/product',(req,res)=>{
//     res.send(`Product Name : ${req.query.name} <br> Product Price : ${req.query.price}`)
// })

// app.listen(3000,()=>{
//     console.log("Server is Running on Port : 3000")
// })


const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','html', 'index.html'));
}   );

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','html', 'about.html'));
});                     

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});