/**
 * Created by YC on 2016/9/5.
 */
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa"
});

function getConnect(){
    connection.connect(function(err){
        if(err){
            console.info("数据库连接失败。。。。");
        }else{
            console.info("数据库连接成功。。。。");
        }
    });
}

connection.on("error",function(err){
    if(err.code==="PROTOCOL_CONNECTION_LOST"){
        console.info("与mysql数据库的连接断开。。。。");
    }else{
        console.info(err);
        throw err;     //抛出错误
    }
});

getConnect();
