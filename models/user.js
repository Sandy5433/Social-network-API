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
        //match valid email address?
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Friend',
        },
    ]
});

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema
    .virtual('friendCount')
    .get(function(){
        return this.friends.length
    })
    

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