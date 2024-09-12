// מוצא את אלמנט הקלט שמאפשר להוסיף משימות לפי ה-ID שלו
const input_add = document.querySelector('#input_add');

// מוצא את גוף הטבלה (tbody) שבו יתווספו שורות המשימות
const table = document.querySelector('tbody');

// טוען את רשימת המשימות (todos) מה-localStorage אם היא קיימת, או יוצר מערך ריק אם לא
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function addTask() {
    // לוקח את הערך מקלט המשימה ומסיר רווחים מיותרים מההתחלה והסוף
    const taskText = input_add.value.trim();

    // אם הערך ריק לאחר החיתוך, לא מוסיפים את המשימה ומסיימים את הפונקציה
    if (taskText === '') return;

    // יוצר מזהה ייחודי למשימה באמצעות פונקציה חיצונית
    const todo = {
        id: createId(),

        // מקבל את תוכן המשימה מהקלט
        text: taskText,

        // הגדרת מצב המשימה כ"לא הושלם" כברירת מחדל
        isDone: false
    };

    // מוסיף את המשימה החדשה למערך המשימות
    todos.push(todo);

    // שומר את מערך המשימות המעודכן ב-localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // מרנדר מחדש את רשימת המשימות בטבלה
    renderTodos();

    // מנקה את שדה הקלט לאחר שהמשימה נוספה
    input_add.value = '';
}

function createId() {
    // יוצר מזהה ייחודי אקראי המבוסס על מספר רנדומלי וממנו מייצר מחרוזת
    return Math.random().toString(36).substring(2, 9);
}

function renderTodos(filteredTasks = todos) {
    const tbody = document.querySelector('tbody');
    // מנקה את תוכן ה-tbody כדי לעדכן את הרשימה מחדש
    tbody.textContent = '';

    filteredTasks.forEach(todo => {
        // יוצר אלמנט שורה חדש עבור כל משימה
        const tr = document.createElement('tr');

        const idtd = document.createElement('td');
        // יוצר תא שבו מוצג חלק מהמזהה של המשימה (3 התווים הראשונים)
        idtd.textContent = `${todo.id.substr(0, 3)}...`;

        // מוסיף את התא לשורה
        tr.append(idtd);

        const textId = document.createElement('td');
        // יוצר תא שבו מוצג תוכן המשימה
        textId.textContent = todo.text;

        // מוסיף את התא לשורה
        tr.append(textId);

        const statusId = document.createElement('td');
        // יוצר תא שבו מוצג מצב המשימה (הושלם/לא הושלם)
        statusId.textContent = todo.isDone ? "הושלם" : "לא הושלם";

        // מוסיף את התא לשורה
        tr.append(statusId);

        // יוצר תא שבו יימצאו כפתורי הפעולה
        const actionsId = document.createElement('td');

        const toggleButton = document.createElement('button');
        toggleButton.style.backgroundColor = `#FFAD33`;
        toggleButton.style.margin = "2px"
        toggleButton.style.border = `none`
        toggleButton.style.padding = `2px`
        toggleButton.style.cursor =`pointer`

        toggleButton.textContent = todo.isDone ? "בטל סיום" : "סמן כהושלם";

        // מקשר את הכפתור לפונקציה שמעדכנת את מצב המשימה
        toggleButton.onclick = () => toggleTask(todo.id);

        // מוסיף את כפתור הפעולה לתא
        actionsId.append(toggleButton);

        const editButton = document.createElement('button');
        editButton.style.backgroundColor = `#4DABF5`;
        editButton.style.border = `none`
        editButton.style.padding = `2px`
        editButton.style.margin = "3px"
        editButton.style.cursor =`pointer`

        // יוצר כפתור לעריכת המשימה
        editButton.textContent = "עריכה";

        // מקשר את הכפתור לפונקציה שמאפשרת לערוך את המשימה (טרם הוגדרה)
        editButton.onclick = () => editTask(todo.id);

        // מוסיף את כפתור העריכה לתא
        actionsId.append(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.style.backgroundColor = `#FF5722`;
        deleteButton.style.border = `none`
        deleteButton.style.padding = `2px`
        deleteButton.style.cursor =`pointer`


        // יוצר כפתור למחיקת המשימה
        deleteButton.textContent = "מחק";

        // מקשר את כפתור המחיקה לפונקציה שמוחקת את המשימה
        deleteButton.onclick = () => deleteTask(todo.id);

        // מוסיף את כפתור המחיקה לתא
        actionsId.append(deleteButton);

        // מוסיף את תא הפעולות לשורה
        tr.append(actionsId);

        // מוסיף את השורה לטבלה
        tbody.append(tr);
    });
}

function toggleTask(id) {
    // מוצא את המשימה לפי מזהה
    const todo = todos.find(todo => todo.id === id);

    // הופך את המצב הנוכחי של המשימה (הושלם/לא הושלם)
    todo.isDone = !todo.isDone;

    // שומר את השינויים במצב המשימה ב-localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // מרנדר מחדש את רשימת המשימות בטבלה
    renderTodos();
}

// פונקציה לעריכת משימה (טרם ממומשת)
function editTask(id) {

}

function deleteTask(id) {
    // מסנן את מערך המשימות ומשאיר רק את המשימות שאינן המשימה שנמחקה
    todos = todos.filter(todo => todo.id !== id);

    // שומר את המערך המעודכן ללא המשימה שנמחקה ב-localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // מרנדר מחדש את רשימת המשימות בטבלה
    renderTodos();
}

document.addEventListener('DOMContentLoaded', () => {
    // כאשר העמוד נטען, מרנדר את המשימות מה-localStorage לטבלה
    renderTodos();
});


function turnOn(){
    let toegl = true
    // האזנה לכפתור 
    // החלפה של הסטיייל בדיבים מאן לבלוק ולהפך אפשר גם להשתמש בטוגל
    if(toegl){
    toegl = false
    bigD = document.querySelector("#div")
    bigD.style.display = "none"   
    editPopupD = document.querySelector("#editPopup")
    editPopupD.style.display = "Block"   
    }else{
        bigD = document.querySelector("#div")
        bigD.style.display = "block"   
        editPopupD = document.querySelector("#editPopup")
        editPopupD.style.display = "none" 
    }
}
