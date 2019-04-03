var fs = require('fs')
//读取文件异步
fs.readFile('../input.txt',function(err,data){
    if(err) console.log(err)
    console.log('异步读取',data.toString())
})
//读取文件同步
var data = fs.readFileSync('../input.txt');
console.log('同步读取',data.toString())
//打开文件
fs.open('../input.txtd','w',function(err,fd){
    if(err) console.log(err)
    console.log('文件打开成功',fd.toString())
})
//获取文件信息
fs.stat('../input.txt',function(err,stats){
    if(err) console.log(err)

    console.log('打印文件信息',stats)
})
//写入文件
fs.writeFile('../input.txt','abcdefghijklmn',{flag:'a'},function(err){
    if(err) console.log(err)

    console.log('文件写入成功')
    fs.readFile('../input.txt',function(err,data){
        if(err) console.log(err)
        console.log('写入后的文件内容',data.toString())
    })
})
//读取文件
var buf = new Buffer.alloc(1024);

fs.open('../input.txt','r',function(err,fd){
    if(err) console.log(err)

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err) console.log(err)
        console.log('字节数',bytes)
        console.log('内容',buf.toString())
    })
    fs.close(fd,function(err){
        console.log('文件关闭')
    })
})
//删除文件
setTimeout(() => {
    fs.unlink('../input.txtd',function(err){
        if(err) console.log(err)
        console.log('文件删除成功')
    })
}, 2000);
//创建目录 ./相对目录，/绝对 
fs.mkdir('./test/',function(err){
    if(err) console.log(err)

    console.log('目录创建成功')
})
//读取目录
fs.readdir('./../',function(err,data){
    if(err) console.log(err)

    console.log('目录',data)
})
//删除目录
setTimeout(() => {
    fs.rmdir('./test',function(err){
        if(err) console.log(err)
    
        console.log('目录删除成功')
    })
}, 1000);