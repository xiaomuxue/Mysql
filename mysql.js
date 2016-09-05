/**
 * Created by YC on 2016/9/5.
 */

//创建数据库   stusys;

create dataBase stusys character set utf8;

//切换数据库到  stusys
use stusys

//创建班级信息表
create table classInfo(
    cid int primary key auto_increment,   //--班级编号 主键列  自动增长
    cname varchar(100) not null unique,  //--班级名称  唯一  不能为空
    status int       //--班级状态
);

//修改自增的起始值
alter table classInfo auto_increment=1001;

//创建学生信息表
create table stuInfo(
    sid int primary key auto_increment,  //--学号
    sname varchar(100) not null,   //--姓名
    cid int,   //--所在班级编号
    sex varchar(4),   //--性别
    age int,    //--年龄
    pwd varchar(100),   //--密码
    tel varchar(15)    //--联系方式
);

//修改学号的起始值
alter table stuInfo auto_increment=10001;

//添加班级的初始数据 注意：mysql中自增列用0代替
insert into classInfo values(0,'YC24',1);
insert into classInfo values(0,'YC23',1);
insert into classInfo values(0,'YC25',1);

//添加学生的初始数据
insert into stuInfo values(0,'纯纯',1001,'女',18,'aaaa','15074717797');





