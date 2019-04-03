var express = require('express')
var bodyParser = require('body-parser')
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/', function (req, res) {
    res.send({
        data: {
            name: 'ss'
        },
        code: 20000
    })
})
app.get('/getData1',function(req,res){
    console.log(1111)
    setTimeout(()=>{
        res.send({
            code:200,
            data:{
                num:1
            }
        })
    },2000)
})
app.get('/getData2',function(req,res){
    setTimeout(()=>{
        res.send({
            code:200,
            data:{
                num:2
            }
        })
    },2000)
})
app.post('/log', function (req, res, next) {

    var data = {
        status: 200,
        isLogin: true,
        navs:[
            {
                name: "table",
                id: "1",
                value: "表格",
                url:'/table/index',
                icon:'el-icon-tickets',
                children: [
                  {
                    name: "atable",
                    id: "1-1",
                    value: "a表格",
                    url:'/table/atable',
                    children: [
                      {
                        name: "aatable",
                        id: "1-1-1",
                        value: "aa表格",
                        url:'/table/atable/aatable'
                      },
                      {
                        name: "abtable",
                        id: "1-1-2",
                        value: "ab表格",
                        url:'/table/atable/abtable'
                      }
                    ]
                  },
                  {
                    name: "btable",
                    id: "1-2",
                    value: "b表格",
                    url:'/table/btable'
                  }
                ]
              },
              {
                name: "setting",
                id: "2",
                value: "设置",
                icon:'el-icon-setting',
                url:'/setting/index',
                children: [
                  {
                    name: "usersetting",
                    id: "2-1",
                    value: "用户设置",
                    url:'/setting/usersetting'
                  },
                  {
                    name: "commsetting",
                    id: "2-2",
                    value: "常用设置",
                    url:'/setting/commsetting'
                  }
                ]
              },
              {
                name: "excel",
                id: "3",
                value: "EXCEL",
                icon:'el-icon-document',
                url:'/excel/index'
              },
        ]
    }
    setTimeout(() => {
        res.send({
            code: 20000,
            data: data
        }); 
    }, 1000);
   
})
    
    
var server = app.listen(8082, function () {
    var host = server.address().address;

    var port = server.address().port;

    console.log('程序运行在 ' + host + '端口' + port)
})