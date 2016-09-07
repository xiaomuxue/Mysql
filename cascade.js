/**
 * Created by YC on 2016/9/7.
 */

var connection=require("./connection").conn;

connection.connect(function(err){
    if(err){
        console.info("连接数据库失败。。。。。");
    }else{
        //因为stuInfo表中有cid列，classInfo表中也有cid列，所以当返回结果是，同名的列会出现覆盖的情况 （同命名的情况）
        //connection.query("select * from stuInfo s,classInfo c where s.cid=c.cid",function(err,result){
        //第一种解决方案：将同名列重命名
       // connection.query("select s.*,c.cid classId,cname,status from stuInfo s,classInfo c where s.cid=c.cid",function(err,result){

        //第二种解决方案：将每个表中的数据按表名或别名分开显示
       // connection.query({sql:"select * from stuInfo s,classInfo c where s.cid=c.cid",nestTables:true},function(err,result){

        //第三种解决方案：在每个字段前面加上所属表的名称或别名
        connection.query({sql:"select * from stuInfo s,classInfo c where s.cid=c.cid",nestTables:"_"},function(err,result){
            if(err){
                console.info("查询学生信息失败。。。。"+err);
            }else{
                console.info(result);
            }
            connection.end();
        });
    }
});


