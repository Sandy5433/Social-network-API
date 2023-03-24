const mongoose = require('mongoose');
const Reaction = require('./reaction')

const thoughtsSchema = new mongoose.Schema({
    thoughtText: {
        type: String, 
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //getter method to format timestamp on query
    },
    username: {
        //the user that created this thought
        type: String, 
        required: true,
    },
    reactions: [Reaction]       
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtsSchema
  .virtual('reactionCount')
  .get(function(){
    return this.reactions.length
  })

  module.exports = Thought;