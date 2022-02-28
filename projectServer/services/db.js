// to connect mongodb with server

const mongoose = require('mongoose')

// connection string

mongoose.connect('mongodb://localhost:27017/ProjectServerDB', {
    useNewUrlParser: true
})


const User = mongoose.model('User', {
   
    uname: String,
    password: String,
  
    
})


module.exports = {
    User
}