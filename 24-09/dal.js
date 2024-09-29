import jsonFile from 'jsonfile'
const dbFile = './db.json'
export function getAll(callBack) {
    jsonFile.readFile(dbFile).then(callBack).catch(err => console.log(err)
    )
}
// פונקציה שמוצאת איי די ומציגה אותו
export function findById(userId, callBack) {
    jsonFile.readFile(dbFile)
        .then((userList) => {
            const user = userList.find((item) => item.id === userId)
            if (!user) callBack(null)
            else callBack(user)
        })
}

export function addUser(user, callBack) {
    jsonFile.readFile(dbFile)
        .then((userList => {
            userList.push(user)
            jsonFile.writeFile(dbFile, userList)
            .then((user) =>callBack(user))
        }))
}