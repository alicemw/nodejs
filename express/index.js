var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var multer = require('multer');
var fs = require('fs');
var path = require('path');

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

//文件上传
var upload = multer({ dest: path.join(__dirname, './upload/') });
app.post('/upload',upload.single('file'),function(req,res,next){
    console.log(req.file)
    var temp_path = req.file.path;
    var ext = '.' + req.file.originalname.split('.')[1];
    var target_path = req.file.path + ext;
    var _filename = req.file.filename + ext;
    var filePath = '/upload/' + _filename;
    console.log("Uploading: " + _filename);
    fs.rename(temp_path, target_path, function(err,data) {
      res.send({
          code:200
      })
    });
})
//登录
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
                  },
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
              {
                  name:'upload',
                  id:'4',
                  value:'UPLOAD',
                  icon:'el-icon-upload',
                  url:'/upload/index'
              }
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