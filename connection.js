/**
 * Created by YC on 2016/9/5.
 */
var mysql=require("mysql");

var connection=mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa",
    multipleStatements:true          //允许执行多条语句，若是没有这句话，就只能一条一条的增、删
});

exports.conn=connection;
