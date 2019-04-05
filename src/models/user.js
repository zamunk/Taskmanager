const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            validate(value){
                if(!validator.isEmail(value)){
                   throw new Error('Email is invalid') 
                }
            }
        },
        age: {
            type: Number,
            default: 0,
            validate(value){
                if(value <0){
                    throw new Error('Age must be a positive number')
                }
            }
        },
        password: {
            type: String,
            validate(value){
                if(value.toLowerCase().includes('password')){
                    throw new Error("Password can not contain 'Password'")
                }
            },
            minlength: 7,
            trim: true
        }
    })

    module.exports = User
    
    //after the model above is set up create a new object 'me' of type User
// const me = new User({ 
//     name: 'Sherry ',
//     email: ' Sherry@hello.net',
//     age: 25,
//     password: '123drowssap'
// })

    //Now save the object information to the database
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })