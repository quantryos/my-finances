require('dotenv').config()

const server = require('../app') 
const port = process.env.PORT || 3030

const mongoDB = require('../DB/mongoDB')

function connectionServer(){
    server.listen(port, (e) =>{
        console.log(`Server running on port: ${ port }`)
    })
}

mongoDB.then(() => {
    
        console.log('MongoDB is running')
        connectionServer()
    })
    .catch((err) => console.log(`MongoDB not running error: ${err}`))

