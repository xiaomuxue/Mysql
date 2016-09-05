/**
 * Created by YC on 2016/9/5.
 */
var mysql=require("mysql");   //导入mysql模块


//创建数据库连接
var connection=mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    dataBase:'stusys',
    user:'root',
    password:'aaaa'
});

//连接到数据库
connection.connect(function(err){
    if(err){
        console.info("mysql数据库连接失败。。。。。");
    }else{
        console.info("mysql数据库连接成功。。。。");
        connection.end(function(err){
            if(err) {
                console.info("mysql数据关闭失败。。。。");
            }else{
                console.info("mysql数据库关闭成功。。。。。");
            }
        });
    }
});
