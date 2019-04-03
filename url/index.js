var http = require('http');
var url =require('url')
var util = require('util')
var querysting = require('querystring')

//get 
// http.createServer(function(req,res){
//     res.writeHead(200,'utf-8',{'Content-Type':'text/plain'})
//     res.end(util.inspect(url.parse(req.url,true)))
// }).listen(3000)
    // http.createServer(function(req,res){

    //     res.writeHead(200,{'Content-Type':'text/plain'});

    //     var params = url.parse(req.url,true).query;
    //     res.write('test'+params.name)
    //     res.end()
    // }).listen(3000)

// post 

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
  http.createServer(function(req,res){
      var body =''
      req.on('data',function(chunk){
        body +=chunk
      })

      req.on('end',function(){
        body = querysting.parse(body);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        if(body.name && body.url){
            res.write('网站名'+body.name);
            res.write('网址'+body.url);
        }else {
            res.write(postHTML)
        }
        res.end();
      })
  }).listen(3000)