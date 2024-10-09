// פרוייקט 2
const divColor = document.getElementById(`color`)
const buttonChange = document.getElementById(`showSquare`)

buttonChange.addEventListener(`click`, changeColor)

function changeColor() {

    buttonChange.style.display = `block`;

}

async function fetchRandomFamily() {
    try {
        const responce = await fecth(`https://randomuser.me/api/`)
        const data = await responce.jsom();
        return data.randomFamily
    } catch (error) {
        Error`Try again`
    }
}

function rundomFamily() {
    const family = fetchRandomFamily()
    divColor.innerHTML = family
    

}