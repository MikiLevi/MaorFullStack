import mongoose, { Schema, Document } from 'mongoose';

export interface IDepartment extends Document {
    name: string,
    besc: string
}

const DepartmentSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
    }
})
