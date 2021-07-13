const {Expense} =require("../../models")
const router = require("express").Router()

//Fufills cookies req
router.post("/", (req, res)=>{
    console.log(req.body,req.session)
    req.body.user_id=req.session.user_id
    Expense.create(req.body).then(data=>{
        res.json(data)
    })
})

router.get("/", (req, res) =>{
    console.log("req.session", req.session)
    Expense.findAll({
        where:{
            user_id:req.session.user_id
        } 

       
    }).then(results=>{
        res.json(results)
    })
})

module.exports = router