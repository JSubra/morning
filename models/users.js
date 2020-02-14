const mongoose = require('mongoose')

const wishlistSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    url : String,
    language : String

})

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    salt: String, 
    wishlist: wishlistSchema
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel