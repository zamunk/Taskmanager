//Provides examples of how to perform CRUS operations on MongoDB --- File not used in the application just for learning purposes.
//mongodb 
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//this line destructures the required mongodb module and achieves the same functionality as the 3 lines above
const {MongoClient, ObjectID} = require('mongodb')

//use the ip address in the connection not the localhost. localhost causes delays
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect: ', error)
    }   
    
    const db = client.db(databaseName)
    
    //similar for deletemany
    db.collection('tasks').deleteOne( {
        description: 'Dr. Visit' 
        }).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
    // const updatePromise = db.collection('users').updateOne( { _id: new ObjectID("5ca4d9d02c765e0c487a0b9d") },{
    //     $set: {
    //         name: 'New Name'
    //     }
    // })  

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // //this is the same as the promise statement above, just a short hand pattern
    // db.collection('users').updateOne( { _id: new ObjectID("5ca5011a8ae068096c1ecbdf") },{
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //  //update manay updates all task completed status to true.
    // db.collection('tasks').updateMany( { completed: false },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('users').findOne({ _id: ObjectID("5ca4d9d02c765e0c487a0b9d")}, (error, user) => {
    //     if(error){
    //         return console.log('unable to fetch data')
    //     }

    //     console.log(user)
    // })   
    
    // db.collection('users').find({age: 35}).toArray((error,users) => {
    //     console.log(users)
    // })

    // db.collection('users').insertOne({
    //     name: 'Jake',
    //     age: '32'
    // }, (error,result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jess',
    //         age: 38
    //     },
    //     {
    //         name: 'Zack',
    //         age: 35
    //     }
    // ],(error,result) =>{
    //     if(error){
    //         return console.log('unable to insert documents')
    //     }
        
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Home Depot',
    //         completed: true
    //     },
    //     {
    //         description: 'Lowes',
    //         completed: false
    //     },
    //     {
    //         description: 'Dr. Visit',
    //         completed: true
    //     }
    // ],(error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks')        
    //     }

    //     console.log(result.ops, result.result, result.insertedCount)
    // })

    


