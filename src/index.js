const express = require('express')
require('./db/mongoose') // this require will cause the file to run and the DB to connect
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000 //for heroku deployment

app.use(express.json()) //this statement will make express interprete the body of the data as json

app.post('/users' , (req,res) => {
    const user = new User(req.body)
    
    user.save().then(() => {
        res.status(201).send(user + ' created!')
    }).catch((error) => {
        res.status(400).send(error)
    })    
})

app.post('/tasks', (req,res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task + ' created!')
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users', (req,res) => {
    User.find().then((users) => {
        res.status(200).send("success\n"+users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.get('/tasks', (req,res) => {

    Task.find().then((tasks) => {
        res.status(201).send("success\n"+tasks)
    }).catch((e) => {
        res.status(500).send(e)
    })
})
app.get('/users/:id', (req,res) => {
    
    User.findById(req.params.id).then((user) => {
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//TODO add tasks find by ID

app.listen(port, () => {
    console.log('Expess server up on port: ' + port)
})
