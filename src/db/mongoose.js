const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    
}).catch(() => {
    
})


//examples from lessons ---keeping for educational purposes
// const Task = mongoose.model('Task',{
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//         optional: true
//     }
// })

// const newTask = new Task({
//     description: 'Finally another'
// })

// newTask.save().then(() => {
//     console.log(newTask)
// }).catch((error)=> {
//     console.log(error)
// })
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         trim: true,
//         required: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                throw new Error('Email is invalid') 
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value <0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error("Password can not contain 'Password'")
//             }
//         },
//         minlength: 7,
//         trim: true
//     }
// })

// const me = new User({ 
//     name: 'Sherry ',
//     email: ' Sherry@hello.net',
//     age: 25,
//     password: '123drowssap'
//  })

//  me.save().then(() => {
//     console.log(me)
//  }).catch((error) => {
//      console.log(error)
//  })