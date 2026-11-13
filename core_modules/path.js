const path=require("path")
let link="https://nodejs.org/docs/latest/api/http.html#httpcreateserveroptions-requestlistener"
let dirname=path.dirname(link)
console.log(dirname)//directory  name

console.log(path.basename(link))//filename only
console.log(path.parse(link))// complete url convert into sub url or objects
console.log(path.format({
    root:'/ignored',
    dir:'/home/user/dir',
    base:'file.txt'
}))
