interface Scooters {
    id?: string;
    model: string;
    barreryLevel: number,
    imageUrl: string;
    color: string;
    status: string;
}

const BASE_URL: string = `https://66e97a0687e41760944998c5.mockapi.io/api/v1/scooter/`;
const newScooter: Scooters = {
    model: `2024`,
    barreryLevel: 87,
    imageUrl: `https://did.li/3S1lC`,
    color: `#f6hj89m`,
    status: `available`
}

const editInId: Scooters = {
    model: `2023`,
    barreryLevel: 98,
    imageUrl: `https://did.li/6S1lC`,
    color: `blue`,
    status: `unavailable`,
}

// פונקציה שמביאה את כל הקורקינטים
async function fetchRandomscooter(): Promise<Scooters> {
    try {
        const responce = await fetch(BASE_URL)
        const data = await responce.json();
        console.log(data);

        return data.responce[0];
    } catch (error) {
        throw new Error("Failed to fetch");
    }
}

// פונקציה שמייצרת קורקינט חדש
async function addNewScooter(scooter: Scooters): Promise<void> {
    try {
        const responce = await fetch(BASE_URL, {
            method: `POST`,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(scooter)
        })
        const jsonResponce = await responce.json();
        // console.log("Responce API:", jsonResponce);
        if (!responce.ok) {
            throw new Error(`Error: ${jsonResponce.message || "Network error"}`);
        }
        console.log("scooter added", jsonResponce);
    } catch (error) {
        console.log(error);
    }
}


// פונקציה שמוחקת קורקינט על פי מספר מזהה
async function deleteOfScooter(id: string): Promise<any> {
    try {
        const responce = await fetch(BASE_URL + id, {
            method: `DELETE`,
            headers: {
                "Content-type": "application/json"
            },
        });
        const jsonResponce = await responce.json();
        // console.log("Responce API:", jsonResponce);
        if (!responce.ok) {
            throw new Error(`Error: ${jsonResponce.message || "Network error"}`);
        }
        console.log("scooter added", jsonResponce);
    } catch (error) {
        console.log(error);
    }
}


// פונקציה שמוחקת קורקינט על פי מספר מזהה
async function editOfScooter(id: string): Promise<any> {
    try {
        const responce = await fetch(BASE_URL + id, {
            method: `PUT`,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(editInId)
        });
        const jsonResponce = await responce.json();
        // console.log("Responce API:", jsonResponce);
        if (!responce.ok) {
            throw new Error(`Error: ${jsonResponce.message || "Network error"}`);
        }
        console.log("scooter added", jsonResponce);
    } catch (error) {
        console.log(error);
    }
}

// addNewScooter()
// fetchRandomscooter()
// deleteOfScooter(`1`)
// editOfScooter(`1`)


