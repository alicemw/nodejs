var http = require('http')
var url = require('url')

function start(route){
    function onRequest(req,res){
        var pathname  = url.parse(req.url).pathname;
        console.log('Request for '+pathname+' received' )
        route(pathname)

        res.writeHead(200,{'Context-Type':'text/plain'});
        res.write('hello world')
        res.end()
        
    }

    http.createServer(onRequest).listen(8888)
    console.log('server start')
}

exports.start = start;