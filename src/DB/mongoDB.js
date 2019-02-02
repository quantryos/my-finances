const mongoDB = require('mongoose')
console.log(process.env.MONGO_URL)
module.exports = mongoDB.connect(process.env.MONGO_URL, {useNewUrlParser: true})