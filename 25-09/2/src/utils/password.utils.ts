import bcrypt from "bcrypt";
export async function encryptsPassword(password:string): Promise<string>
{
    const hashPassword = await bcrypt.hash(password,10);
    console.log(hashPassword);
    return hashPassword
}
export async function passwordChecker(password:string, hashPassword:string) :Promise<boolean>
{
    const passwordTrue :boolean = await bcrypt.compare(password, hashPassword);
    console.log(passwordTrue);
    return passwordTrue;
}





