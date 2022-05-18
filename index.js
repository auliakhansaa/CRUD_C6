const express = require('express')
const req = require('express/lib/request')
const app = express()
const {tokoku} = require('./models')

app.use(express.json())

//Get all article

app.get('/tokoku',(req,res)=> {
    tokoku.findAll()
    .then(tokoku=>{
        res.status(200).json(tokoku)
    })
})


//Get article by ID

app.get('/tokoku/:id',(req,res)=>{
    tokoku.findOne({
        where:{ id: req.params.id}
    })
    .then(tokoku=>{
        res.status(200).json(tokoku)
    })
})

app.post('/tokoku',(req,res)=>{
    tokoku.create({
        title:req.body.title,
        body: req.body.body,
        approved: req.body.approved
    })
    .then(tokoku=>{
        res.status(201).json(tokoku)
    }).catch(err=>{
        res.status(422).json("Can't create tokoku")
    })
})

app.put('/tokoku/:id', (req,res)=>{
    tokoku.update({
        title:req.body.title,
        body: req.body.body,
        approved : req.body.approved
    },{
        where:{id:req.params.id}
    })
    .then(tokoku=>{
        res.status(200).json({message:"Data terupdate"})
    }) .catch(err=>{
        res.status(422).json("Can't edit tokoku")
    })
})


app.delete('/tokoku/:id', (req,res)=>{
    tokoku.destroy({
        where:{id:req.params.id}
    }).then(tokoku=>{
        res.sendStatus(204)
    }).catch(err=>{
        res.status(422).json("Can't delete tokoku")
    })
})