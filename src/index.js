const express = require('express')
require('./db/mongoose') // this require will cause the file to run and the DB to connect
const User = require('./models/user')
const Task = require('./models/task')
const cors = require('cors')//for setting common-origin response in header to browser

const app = express()
const port = process.env.PORT || 3000 //for heroku deployment

app.use(express.json()) //this statement will make express interprete the body of the data as json

app.use(cors())//Without this the web browser will be blocked from accessing the express data. will get error like Access-Control-Allow-Origin
               //...(cors()) by default will allow all origins...see documentation to make whitelist or limit users.

app.post('/users' , (req,res) => {
    console.log("Post Request Users")
    const user = new User(req.body)
    
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
        console.log('error - ' + e)
    })    
})

app.post('/tasks', (req,res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users', (req,res) => {
    console.log('Get Request Users')
    User.find().then((users) => {
        res.status(200).send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.get('/tasks', (req,res) => {
    Task.find().then((tasks) => {
        res.status(201).send(tasks)
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

app.get('/tasks/:id',(req,res) => {

    Task.findById(req.params.id).then((task) => {
        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.listen(port, () => {
    console.log('Expess server up on port: ' + port)
})
