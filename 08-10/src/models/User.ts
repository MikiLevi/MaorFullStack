import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import { IDepartment } from "./Department";


// מגדירים אינטרפייס
export interface IUser extends Document {
    username: string,
    password: string,
    role: 'employee' | 'manager',
    salary: number,
    yearsOfExperiens: number,
    startDate: Date,
    age: number,
    lastLogin: Date,
    department: IDepartment['_id'],
    comperePassword(userPassword: string): Promise<boolean>
}

// יצירת סכמה
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['employee', 'manager'],
        default: 'employee'
    },
    salary: {
        type: Number,
        required: true
    },
    yearsOfExperiens: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true,
        
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'department'
    }
}, { timestamps: true });


// פונקציות שאני רוצה לעשות לפני שאני שומר את המסמך
UserSchema.pre<IUser>('save', async function (next) {
    // בדיקה האם הסיסמא עברה מניפולציה
    if (this.isModified('password')) return next()
    //  ההצפנה של הסיסמא
    // const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, 10) // ה 10 זה העירבוב של הסולט
    next();
})

// מתודה להשוואת הסיסמה האם היא מתאימה לסיסמה המוצפנת
UserSchema.methods.comperePassword = async function (userPassword: string): Promise<boolean> {
    return await bcrypt.compare(userPassword, this.password)
}
// מגדיר מאפיין ספציפי באינדקס כדי לאפשר גישה נוחה ומהירה
UserSchema.index({ role: 1 })
UserSchema.index({ username: 1 })
UserSchema.index({ salary: 1 })

//ליצור ולייצא את המודל בפועל
export default mongoose.model<IUser>('User', UserSchema)