/**
 * Created by YC on 2016/9/7.
 */
var mysql=require("mysql");
var fs=require("fs");

var connection=mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa"
});
var out=fs.createWriteStream("./data.txt");        //文本形式
//var out=fs.createWriteStream("./data.xls");      //exsl的打开方式

out.on("error",function(err){
    console.info("数据写入文件失败。。。。"+err);
    process.exit();    //退出程序
});

connection.connect(function(err){
    if(err){
        console.info("连接数据库失败。。。"+err);
    }else{
        var result=connection.query({sql:"select * from stuInfo s inner join classInfo c on s.cid=c.cid",nestTables:"_"});
        result.on("error",function(err){
            console.info("获取学生信息失败。。。。"+err);
            process.exit();      //退出程序
        });

        result.on("fields",function(fields){  //读取返回结果集中每一列的列信息
            var str="";
           fields.forEach(function(field){   //循环所有的列
                str+=field.name+"\t"
            });
            out.write(str+"\r\n");
        });

        result.on("result",function(row){   //每读取一行记录，触发一次
            connection.pause();     //每读到一条数据，先暂停读取后面的数据
            out.write(row.s_sid+"\t"+row.s_sname+"\t"+row.s_cid+"\t"+row.s_sex+"\t"+row.s_age+"\t"+row.s_pwd+
            "\t"+row.s_tel+"\t"+row.c_cid+"\t"+row.c_cname+"\t"+row.c_status+"\r\n","utf8",function(err){
                if(err){
                    console.info("数据写入文件失败。。。。"+err);
                    process.exit();      //退出程序
                }else{
                    //如果没有错误，则继续读取下一行数据
                    connection.resume();
                }
            }
            );
        });

        result.on("end",function(){   //数据读完
            console.info("学生信息读取完毕。。。。");
            connection.end();   //关闭连接
        });
    }
});