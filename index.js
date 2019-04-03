var fs = require('fs')
fs.readdir('./',function(err,data){
    if(err) console.log(err)

    data.forEach((i)=>{
        console.log(i)
    })
})