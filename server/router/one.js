let express=require("express");
let router=express.Router()
let oneData=require("../mock/one.json")//获取数据

//回调函数：req--请求、res--相应；“/data”--路由地址（随便起名）
router.get("/data",(req,res)=>{
    res.send({msg:"我是one的路由地址",chartData:oneData})
})

//将上述路由router暴露export出去
module.exports=router;