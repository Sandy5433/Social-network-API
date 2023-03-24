const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    thoughts:
    friends:   
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User.create(
    {
        username: 'sandyh',
        email: 'sandy@gmail.com',
        thoughts:''
        friends: 
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = User;