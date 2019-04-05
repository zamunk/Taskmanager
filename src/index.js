const express = require('express')
require('./db/mongoose') // this require will cause the file to run and the DB to connect
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000 //for heroku deployment

app.use(express.json()) //this statement will make express interprete the body of the data as json

app.post('/users' , (req,res) => {
    const user = new User(req.body)
    
    user.save().then(() => {
        res.send(user + ' created!')
    }).catch((error) => {
        res.status(400).send(error)
    })    
})

app.listen(port, () => {
    console.log('Expess server up on port: ' + port)
})
