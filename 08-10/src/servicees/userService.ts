import User, { IUser } from '../models/User'

export const createUser = async (userData: Partial<IUser>, departmentId: string): Promise<IUser> => {
    const user = new User({
        ...userData,
        department: departmentId
    });

    // 
    return await user.save()
}

// קבלת משתמש לפי id
export const getUserbyId = async (id: string): Promise<IUser | null> => {
    return await User.findById(id).select('-password').populate('department')
};
// הבאת כל היוזרים
export const getAllUsers = async (): Promise<IUser[]> => {
    return User.find().select('-passsword').populate('department')
};
// עדכון לפי id
export const updateuser = async (id: string, updateData: Promise<IUser>): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(id, updateData, { new: true }).select('-password')
};
// מחיקה לפי id 
export const deleteUser = async (id: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete()
};
// לקבל משתמשים לפי התפקיד שלהם
export const getUserByRole = async (role: "employee" | "manager"): Promise<IUser[]> => {
    return await User.find({ role }).select('-password');
};
// קבלת משתמשים לפי טווח שכר
export const getUseeBySalaryRange = async (minSalary: number, maxSalary: number): Promise<IUser[]> => {
    return await User.find({
        salary: { $gte: minSalary, $lte: maxSalary }
    }).select('-password')
};
// מביא סטטיסטיקה על עובד
export const getUserStatistics = async () => {
    // מציאת המשתמש עם השכר הגבוה ביותר
    const highestSalary = await User.findOne().sort('-salary').select('username salary')

    // הגדרת זמנים לבדיקת איחורים
    const now = new Date();

    const startOfTheDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(), 0, 0, 0
    )
    const nineAM = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(), 9, 3, 0
    )
    const lateEmployee = await User.find({
        role: 'employee',
        lastLogin: { $gte: startOfTheDay, $gt: nineAM }
    }).select('username lastLogin')

    const avarageSalary = await User.aggregate([
        { $group: { avgSalary: { $avg: '$salary' } } }
    ])

    return {
        highestSalary,
        lateEmployee,
        avarageSalary
    }
}