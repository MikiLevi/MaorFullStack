

async function getUsers(count) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`)
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);

    }
}

const renderUser = async () => {
const users = await getUsers(2)
console.log(users);
    users.result.name.first
}

renderUser()