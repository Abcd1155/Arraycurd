var express = require('express');
var router = express.Router();
let arrayData=[{
    Id:'1',
    Name:'komal',
    Mobile:'7020860504'
}]

router.post('/',(req,res)=>{
    res.send({data:arrayData})
})
router.post('/new',(req,res)=>{
    let obj={
        Id:arrayData.length+1,
        Name:req.body.Name,
        Mobile:req.body.Mobile,
    }
    arrayData.push(obj);
    res.send({data:obj,message:'new user created'})
})
router.post('/update/:id',(req,res)=>{
    let id=req.params.id;
    arrayData.map(arr=>{
        if(arr.Id==id){
            arr.Name=req.body.Name
        }
        res.send({data:arr,message:'update name'})
    })
    res.send({data:null,message:'updated not name'})
})
router.post('/delete/:id',(req,res)=>{
    let id=req.params.id;
    arrayData.map((arr,i)=>{
        if(arr.Id==id){
            arrayData.splice(i,1);
        }
        res.send({data:arr,message:'deleted name'})
    })
    res.send({data:null,message:'deleted not name'})
})
module.exports=router;