const db=require("./db");
sql = "select * from students order by MaSV limit 0,5 ";
db.query(sql).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});