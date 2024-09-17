// Sample tasks data
const x = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Task ${i + 1}`,
    description: `This is the description for task ${i + 1}.`
}));



// Function to render tasks
function renderTasks() {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        // Create task card
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';

        // Create task title
        const taskTitle = document.createElement('h3');
        taskTitle.textContent = task.title;

        // Create task description
        const taskDescription = document.createElement('p');
        taskDescription.textContent = task.description;

        // Append title and description to the card
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);

        // Append task card to the main container
        taskContainer.appendChild(taskCard);
    });
}

// Initial render
renderTasks();
