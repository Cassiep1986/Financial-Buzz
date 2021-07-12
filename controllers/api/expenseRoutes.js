const {Expense} =require("../../models")
const router = require("express").Router()


router.post("/", (req, res)=>{
    console.log(req.body,req.session)
    req.body.user_id=req.session.user_id
    Expense.create(req.body).then(data=>{
        res.json(data)
    })
})

module.exports = router