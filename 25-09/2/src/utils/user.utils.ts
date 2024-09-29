import { User } from "../model/user.model";
import {createUniqueId  } from "./generatId.utils";
import {encryptsPassword } from "./password.utils";

export async function createNewUser(userName:string, password:string ) :Promise<User>{
    const user:User ={
        id:createUniqueId(),
        password:await encryptsPassword(password),
        userName:userName
    } 
    return user
}