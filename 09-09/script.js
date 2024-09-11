// 1
const body = document.body
const newH1 = document.createElement(`h1`);
newH1.innerText = "Mouse Out";
body.append(newH1)

// a
newH1.addEventListener("mouseout", function () {
    newH1.textContent = "Mouse Out"
})

// b
newH1.addEventListener("mouseover", function () {
    newH1.textContent = "Mouse In"
})

// c
newH1.addEventListener("click", style)

function style() {
    newH1.style.color = "#F152C4"
    newH1.style.backgroundColor = "#09D0D2"
    newH1.style.textDecoration = "underline"
}

// c
const newDiv = document.createElement('div');

newDiv.style.width = '150px';
newDiv.style.height = '150px';
newDiv.style.backgroundColor = 'lightblue'; 
body.appendChild(newDiv);

// a
const newButton = document.createElement('button');
newButton.textContent = 'Change Color';
newButton.style.height = "20px";
newButton.style.margin = "3px";
body.appendChild(newButton);

newButton.addEventListener('click', changeColorRandom);
function changeColorRandom() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    newDiv.style.backgroundColor = randomColor;
}

// b
const newSelect = document.createElement('select');
body.append(newSelect);

const colors = ['red', 'blue', 'green', `pink`];
for (let i = 0; i < colors.length; i++) {
    const newOption = document.createElement('option');
    newOption.innerText = colors[i];
    newSelect.add(newOption);
}

newSelect.addEventListener('change', changeColor);

function changeColor() {
    newDiv.style.backgroundColor = newSelect.value;
}

// c
const newButtonGone = document.createElement('button');
newButtonGone.innerText = 'Suppress the div';
newButtonGone.style.margin = "2px";
body.append(newButtonGone)

newButtonGone.addEventListener('click', buttonGone);

function buttonGone() {
    debugger;

    if (newDiv.style.display === "none") {
        newButtonGone = newDiv.style.display = `block`;
    } else (
        newButtonGone = newDiv.style.display = `none`
    )
}

// d
const newInput = document.createElement('input');
newInput.type = 'text';
newInput.placeholder = 'Enter a new color. . .';
body.append(newInput);

const addColor = document.createElement('button');
addColor.textContent = 'Add Color to Select';
body.append(addColor);

addColor.addEventListener('click', function () {
    const newColor = newInput.value.trim();
    if (newColor !== "") {
        const newOption = document.createElement('option');
        newOption.value = newColor;
        newOption.textContent = newColor;
        newSelect.appendChild(newOption);
        newInput.value = '';
    };
});