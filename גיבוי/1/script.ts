// פרוייקט 1
// איזה מידע אני צריך על האנשים
interface RandomUser {
    name: {
        first: string;
        last: string
    };
    email: string;
    picture: {
        medium: string;
    }
}

// להביא את המידע של האנשים
async function fetchRandomUser(): Promise<RandomUser> {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        return data.randomUser[0]
    } catch (error) {
        throw new Error("Failed to fetch");
    }
}

function randomUser(user: RandomUser): void {
    const userInfoElement = document.getElementById(`userInfo`);
    if (userInfoElement) {
        userInfoElement.innerHTML = ``;

        // ניצור את התמונה
        const imageUser = document.createElement(`img`);
        imageUser.src = user.picture.medium;
        imageUser.alt = user.name.first;
        userInfoElement.appendChild(imageUser);

        // יצירה של השם
        const userName = document.createElement(`h3`);
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userInfoElement.appendChild(userName);

        // יצירה של מייל
        const userEmail = document.createElement(`p`);
        userEmail.textContent = user.email;
        userInfoElement.appendChild(userEmail);

    }
}


document.addEventListener(`DOMContentLoaded`, () => {
    const generateBtn = document.getElementById(`generateBtn`);
    if (generateBtn) {
        generateBtn.addEventListener(`click`, async () => {
            try {
                const user = await fetchRandomUser();
                randomUser(user)
            } catch (error) {
                console.log(error);

            }
        })
    }
})