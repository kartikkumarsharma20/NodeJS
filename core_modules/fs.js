const fs=require('node:fs')//file system module

//create file
fs.writeFile('read.txt','hello nodejs,this is notes file',(err,data)=>{

    if (err){
        console.log(err)
    }
    else{
        console.log("File is created")
    }
})

//read file content
fs.readFile('read.txt',(err,data)=>{//read file
    if (err){
        console.log(err)
    }
    else{
        // console.log(data)
       console.log(data.toString())
    }
})

//append file data
fs.appendFile('read.txt','\nhello nodejs,this is notes file append',(err,data)=>{//append file
  if(err){
    console.log(err)
  }
  else{
    console.log("data is updated")
  }

})

//delete file
fs.unlink('read.txt',(err,data)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("file is deleted")
  }
})