const http=require('http')
const server=http.createServer((req,res)=>{//request and response are object
   res.write('hello nodejs!!!')
   res.end();
 })

server.listen(3000,()=>{
   console.log("Server is Running on Port : 3000")
 })