
const jwt = require('jsonwebtoken')

const db = require('./db')

users = {
    1000: { uname: "Anju", password: "1000", },
    1001: { uname: "Thomas", password: "1001", },
    1002: { uname: "Ruby", password: "1002", }
}





const register = (password, uname) => {


    return db.User.findOne({
        uname
    }).then(user => {
        console.log(user)

        if (user) {
            return {
                statusCode: 401,
                status: false,
                message: "username Already Exists.....Please Login!!!!"
            }
        }
        else {
            const newUser = new db.User({

                uname,
                password

            })
            newUser.save()
            return {
                statusCode: 200,
                status: true,
                message: "Account Successfully Created!!!"
            }
        }
    })



}




const login = (uname, password) => {



    return db.User.findOne({
        uname,
        password
    }).then(user => {
        if (user) {


            currentUserName = user.uname



            const token = jwt.sign({



            }, 'supersecretkey123')




            return {
                statusCode: 200,
                status: true,
                message: "Successfully Logged In!!!!!",
                currentUserName,
                token
            }
        }

        return {
            statusCode: 401,
            status: false,
            message: "Invalid Credentials!!!!!!"
        }
    })
}

































