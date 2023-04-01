const Reaction = require('./reaction')
const {Schema, model} = require('mongoose');
const dayjs = require('dayjs')

const thoughtsSchema = new Schema({
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
        get: function (date){
          return dayjs(date).format('ddd D MMM, YYYY h:mm A')
        }
    },
    username: {
        type: String, 
        required: true,
    },
    reactions: [Reaction]       
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

thoughtsSchema
  .virtual('reactionCount')
  .get(function(){
    return this.reactions.length
  })

const Thought = model('Thought', thoughtsSchema);
module.exports = Thought;