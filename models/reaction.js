const {Schema, Types} = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      // createdAt: {
      //   type: Date,
      //   default: Date.now,
      // },
      createdAt: {
        type: Date,
        default: Date.now,
        //getter method to format timestamp on query
        get: function (date){
          return dayjs(date).format('ddd D MMM, YYYY h:mm A')
        }
    }},
    {
      toJSON: {
        getters: true
      },
      id: false,
    }
    );
  
  module.exports = reactionSchema;
  