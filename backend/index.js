const express = require('express');
const cors = require("cors");
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/todo', async function(req,res){
    const createPayload = req.body;
    // console.log(createPayload);
    
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })

    res.json({
        msg: "Todo created"
    })

})
app.get('/todos', async function(req,res){
    const todos = await todo.find({});

    res.json({
        todos
    });
})
app.put('/completed', async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    });

    res.json({
        msg: "Todo marked as completed!"
    });
})

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));