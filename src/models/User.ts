import {model, Schema, Document} from "mongoose";
import bcrytp from "bcrypt";

export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword: (password: string)=> Promise<boolean>;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
})


//Método para cifrar el password
userSchema.pre<IUser>('save', async function (next) {
  const user = this
  if (!user.isModified('password')) return next()

const salt = await bcrytp.genSalt(10);
const hash = await bcrytp.hash(user.password, salt)
user.password = hash
next()
})

//Método para comparar el password
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcrytp.compare(password, this.password)
}


export default model<IUser>('User', userSchema)