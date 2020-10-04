import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TutorialSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    published: {
        type: Boolean
    }
});