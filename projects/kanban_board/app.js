const boardContainer = document.querySelector(".board-container");
const addBoardBtn = document.querySelector(".addBoard-btn");

// Creating Empty Board

function createBoard() {
    let headingText = prompt("Enter Heading:");
    let descriptionText = prompt("Enter Description:");
    let numberOfTasks = 0
    
    if (!headingText) return; // Exit if no heading
    
    const board = document.createElement("div");
    board.classList.add("board");
    
    // Create board content
    board.innerHTML = `
        <h2>${headingText} <span class="numberOfTasks">${numberOfTasks}</span></h2>
        <p class="board-description">${descriptionText || ''}</p>
        <div class="tasks-container"></div>
        <button class="addTask-btn">&#10010;</button>
    `;
    
    boardContainer.appendChild(board);

    // Add task button handler for THIS board
    const addTaskBtn = board.querySelector(".addTask-btn");
    addTaskBtn.addEventListener("click", () => {
        const tasksContainer = board.querySelector(".tasks-container");
        createTask(tasksContainer); // Pass specific container
    });

    const taskContainer = document.querySelector('.task-container');

}

// Create and Add Task
function createTask(container) {
    let taskInput = prompt("Enter Task:");
    if (!taskInput) return;
    
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item", "task");
    taskItem.setAttribute("draggable", "true");
    
    taskItem.innerHTML = `
        <p contenteditable = "true">${taskInput}</p>
        <button class="del-btn">&#10006;</button>
    `;
    
    taskItem.querySelector(".del-btn").addEventListener("click", () => {
        taskItem.remove();
        updateTaskCount(container, -1)
    });
    
    container.appendChild(taskItem);
    updateTaskCount(container,1)

    // Helper function to update task count
}
function updateTaskCount(container, change) {
    const board = container.closest('.board');
    const countElement = board.querySelector('.numberOfTasks');
    const currentCount = parseInt(countElement.textContent) || 0;
    countElement.textContent = currentCount + change;
}


addBoardBtn.addEventListener("click", createBoard);

