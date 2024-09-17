
// const imgElement = document.getElementById('pokemonSprite');
// const pokemonNameEl = document.getElementById(`pokemonName`)

// // fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
// //     .then(response => {
// //         if (response.ok) {
// //             throw new Error("Cloud is nod acssics...");
// //         }
// //         return response.json();
// //     })
// //     .then(data => console.log(data.weight))
// //     .catch(erorr => console.error(error));    

// async function findData() {
//     try {
//         const poke = document.getElementById('pokemonName').value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);

//         if (!response.ok) {
//             throw new Error("Not found");
//         }

//         const data = await response.json();
//         console.log(data);
//         //הבאת אובייקט שמכיל פוקימון
//         const pokemonSprite = data.sprites.front_default;
//         const pokemonName = data.name


//         console.log("pokemon name:", pokemonName);

//         document.getElementById(`pokemonName`).textContent += "pokemonName";
//         imgElement.src = pokemonSprite;
//         imgElement.alt = pokemonName;
//         imgElement.style.display = 'block';
//     } catch (error) {
//         console.error(error);
//     }
// }
const imgElement = document.getElementById('pokemonSprite');
const pokemonNameEl = document.getElementById('pokemonName');

async function findData() {
    try {
        const poke = document.getElementById('pokemonNameInput').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);

        if (!response.ok) {
            throw new Error("Not found");
        }

        const data = await response.json();
        console.log(data);

        // הבאת את שם הפוקימון מה-API
        const pokemonName = data.name;

        console.log("Pokemon name:", pokemonName);

        // הצגת שם הפוקימון מתחת לתמונה
        pokemonNameEl.textContent = pokemonName;

        // הצגת התמונה של הפוקימון
        imgElement.src = data.sprites.front_default;
        imgElement.alt = pokemonName;
        imgElement.style.display = 'block';
    } catch (error) {
        console.error(error);
    }
}
