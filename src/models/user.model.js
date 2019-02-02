const mongoose = require('mongoose')
const bcript = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [8, 'field has a minimum length of 8 characters']
    },
    password: {
        type: String,
        required: true,
        
        minlength: [6, 'field has a minimum length of 4 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [8, 'field has a minimum length of 8 characters'],
        lowercase: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }

})

userSchema.pre('save', async function(){
    const hash = await bcript.hash(this.password, bcript.genSalt(11))
    this.password = hash

})


module.exports = mongoose.model('Users', userSchema)