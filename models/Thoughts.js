const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// const dateFormat = require('../utils/Format');

const ReplySchema = new Schema(
    {
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String,
            required: true,
            maxLength: 300
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: moment().format('MMMM Do YYYY, h:mm:ss a')
            // get: createdAt => dateFormat(createdAt)
        }
    },
    {
        toJSON: {
            get: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1, 
            maxLength: 300
        },
        createdAt: {
            type: Date,
            default: moment().format('MMMM Do YYYY, h:mm:ss a')
            // get: createdAt => dateFormat(createdAt)
        },
        username: {
            type: String,
            required: true
        },
        replies : [ReplySchema]
    },
    {
        toJSON: {
            get: true
        }
    }
);

const Thoughts = model('Thoughts', ThoughtSchema);

module.exports = Thoughts;