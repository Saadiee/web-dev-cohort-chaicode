const taskInputElement = document.getElementById('taskInput');
const addButtonElement = document.getElementById('addBtn');
const taskListElement = document.getElementById('taskList');
const taskStatsElement = document.getElementById('taskStats');
const emptyMessageElement = document.getElementById('emptyMessage');

let tasksList = [];

/**
 * Updates the text content of the element with the id "taskStats" to display
 * the total number of tasks and the number of completed tasks.
 * @function
 */
function updateStats() {
    const totalTasks = tasksList.length;
    const completedTasks = tasksList.filter(task => task.completed).length;
    
    taskStatsElement.textContent = `Total: ${totalTasks}, Completed: ${completedTasks}`;
}

/**
 * Checks if the tasksList array is empty and if so,
 * displays the emptyMessageElement, otherwise hides it.
 * @function
 */
function checkEmptyMessage() {
    if (tasksList.length === 0) {
        emptyMessageElement.style.display = "block";
    } else {
        emptyMessageElement.style.display = "none";
    }
}

/**
 * Adds a task to the tasks list and displays it in the UI.
 * @function
 */
function addTask() {
    let taskInputText = taskInputElement.value.trim();
    if (taskInputText === "") return;

    let task = { text: taskInputText, completed: false };
    tasksList.push(task);

    let taskLiElement = document.createElement("li");
    taskLiElement.classList.add('task');

    let taskContainer = document.createElement("div");
    taskContainer.classList.add('task-container');

    let doneCheckBox = document.createElement('input');
    doneCheckBox.type = "checkbox";
    doneCheckBox.name = "done";

    let taskText = document.createElement('p');
    taskText.innerText = taskInputText;

    doneCheckBox.addEventListener("change", function () {
        task.completed = this.checked;
        taskText.classList.toggle("completed", this.checked);
        updateStats();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.id = "deleteBtn"

    deleteBtn.addEventListener('click', function () {
        tasksList = tasksList.filter(t => t !== task);
        taskLiElement.remove();
        checkEmptyMessage();
        updateStats();
    });

    taskContainer.appendChild(doneCheckBox);
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(deleteBtn);
    taskLiElement.appendChild(taskContainer);
    taskListElement.prepend(taskLiElement);

    taskInputElement.value = "";
    checkEmptyMessage();
    updateStats();
}

// Add task on Enter key press
taskInputElement.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

addButtonElement.addEventListener('click', addTask);
addButtonElement.addEventListener('enter', addTask);

checkEmptyMessage();
updateStats();
