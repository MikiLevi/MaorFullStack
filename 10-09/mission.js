// מוצא את המקום שבו אנחנו יכולים לכתוב משימות חדשות
const input_add = document.querySelector('#input_add');

// מוצא את המקום בטבלה שבו נציג את המשימות
const table = document.querySelector('tbody');

// בודק אם יש משימות ששמרנו לפני כן, אם לא, מתחילים מרשימה ריקה
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// פונקציה להוסיף משימה חדשה
function addTask() {
    // לוקח את מה שכתבו בשדה וחותך רווחים מיותרים
    const taskText = input_add.value.trim();

    // אם השדה ריק, לא עושים כלום
    if (taskText === '') return;

    // יוצר משימה חדשה עם מזהה, טקסט ומצב (אם היא הושלמה או לא)
    const todo = {
        id: createId(), // מזהה ייחודי
        text: taskText, // מה שכתוב
        isDone: false   // מצב ההשלמה (לא הושלמה)
    };

    // מוסיף את המשימה לרשימה שלנו
    todos.push(todo);

    // שומר את הרשימה המעודכנת במחשב
    localStorage.setItem('todos', JSON.stringify(todos));

    // מציג את המשימות בטבלה מחדש
    renderTodos();

    // מנקה את השדה לכתיבת משימות
    input_add.value = '';
}

// פונקציה ליצירת מזהה אקראי
function createId() {
    return Math.random().toString(36).substring(2, 9); // מזהה ייחודי
}

// פונקציה להציג את כל המשימות בטבלה
function renderTodos(filteredTasks = todos) {
    const tbody = document.querySelector('tbody');
    // מנקה את הטבלה לפני שמוסיפים משימות חדשות
    tbody.textContent = '';

    // לוקח כל משימה ומוסיף אותה לשולחן (טבלה)
    filteredTasks.forEach(todo => {
        const tr = document.createElement('tr'); // שורה חדשה בטבלה

        // תא עבור המזהה של המשימה
        const idtd = document.createElement('td');
        idtd.textContent = `${todo.id.substr(0, 3)}...`; // מציג רק חלק מהמזהה
        tr.append(idtd); // מוסיף לתוך השורה

        // תא עבור מה שכתוב במשימה
        const textId = document.createElement('td');
        textId.textContent = todo.text; // מציג את תוכן המשימה
        tr.append(textId); // מוסיף לתוך השורה

        // תא עבור מצב המשימה (אם הושלמה או לא)
        const statusId = document.createElement('td');
        statusId.textContent = todo.isDone ? "הושלם" : "לא הושלם"; // מצב המשימה
        tr.append(statusId); // מוסיף לתוך השורה

        // תא עבור כפתורי פעולה
        const actionsId = document.createElement('td');

        // כפתור לסימון משימה כהושלמה
        const toggleButton = document.createElement('button');
        toggleButton.textContent = todo.isDone ? "בטל סיום" : "סמן כהושלם"; // טקסט הכפתור
        toggleButton.onclick = () => toggleTask(todo.id); // כשלוחצים על הכפתור
        actionsId.append(toggleButton); // מוסיף את הכפתור לתא

        // כפתור לעריכת המשימה
        const editButton = document.createElement('button');
        editButton.textContent = "עריכה"; // טקסט הכפתור
        editButton.onclick = () => editTask(todo.id); // מקשר לפונקציה
        actionsId.append(editButton); // מוסיף את הכפתור לתא

        // כפתור למחיקת המשימה
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "מחק"; // טקסט הכפתור
        deleteButton.onclick = () => deleteTask(todo.id); // מקשר לפונקציה
        actionsId.append(deleteButton); // מוסיף את הכפתור לתא

        // מוסיף את תא הכפתורים לשורה
        tr.append(actionsId);
        tbody.append(tr); // מוסיף את השורה לטבלה
    });
}

// פונקציה לשינוי מצב המשימה (הושלמה או לא)
function toggleTask(id) {
    const todo = todos.find(todo => todo.id === id); // מוצא את המשימה לפי מזהה
    todo.isDone = !todo.isDone; // משנה את מצב ההשלמה
    localStorage.setItem('todos', JSON.stringify(todos)); // שומר את השינויים
    renderTodos(); // מרנדר מחדש את המשימות
}

// פונקציה לעריכת משימה (עדיין לא ממומשת)
function editTask(id) {
    // כאן ניתן להוסיף קוד לעריכת המשימה
}

// פונקציה למחיקת משימה
function deleteTask(id) {
    // מסנן את הרשימה ומשאיר רק את המשימות שאינן נמחקות
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos)); // שומר את הרשימה המעודכנת
    renderTodos(); // מרנדר מחדש את המשימות
}

// מאזין לאירוע טעינת העמוד
document.addEventListener('DOMContentLoaded', () => {
    renderTodos(); // מציג את המשימות כשהעמוד נטען
});

// פונקציה לשינוי תצוגה של אלמנטים
function turnOn() {
    let toggled = true; // משתנה לבדוק את מצב התצוגה
    const bigD = document.querySelector("#div");
    const editPopupD = document.querySelector("#editPopup");
    
    if (toggled) {
        toggled = false; // משנה את המצב
        bigD.style.display = "none"; // מסתיר את הדיב
        editPopupD.style.display = "block"; // מציג את חלון העריכה
    } else {
        bigD.style.display = "block"; // מציג את הדיב
        editPopupD.style.display = "none"; // מסתיר את חלון העריכה
    }
}
