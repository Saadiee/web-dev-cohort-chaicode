// Getting elements reference
const taskInputElement = document.getElementById('taskInput');
const addButtonElement = document.getElementById('addBtn')
const taskListElement = document.getElementById('taskList')


function addTask() {
    let taskInputText = taskInputElement.value.trim();
    
    if (taskInputText === "") return; // Prevent empty tasks

    let taskLiElement = document.createElement("li");
    taskLiElement.classList.add('task');

    let task_container = document.createElement("div");
    task_container.classList.add('task-container');

    let doneCheckBox = document.createElement('input');
    doneCheckBox.type = "checkbox";
    doneCheckBox.name = "done";

    let taskText = document.createElement('p');
    taskText.innerText = taskInputText;

    doneCheckBox.addEventListener("change", function () {
        taskText.classList.toggle("completed", this.checked);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.id = "deleteBtn"

    deleteBtn.addEventListener('click', function () {
        taskLiElement.remove();
    });

    task_container.appendChild(doneCheckBox);
    task_container.appendChild(taskText);
    task_container.appendChild(deleteBtn);
    taskLiElement.appendChild(task_container);
    taskListElement.prepend(taskLiElement);

    taskInputElement.value = ""; // Clears the input after adding a task
}
addButtonElement.addEventListener('click', addTask)



// ************************** AI-CODE ************************************
// function addTask() {
//     const inputText = taskInputElement.value.trim();

//     if (inputText === "") return;

//     const taskElement = document.createElement("li");
//     taskElement.className = 'task';

//     const container = document.createElement("div");
//     container.className = 'task-container';

//     const checkbox = document.createElement('input');
//     checkbox.type = "checkbox";
//     checkbox.name = "done";

//     checkbox.addEventListener("change", () => {
//         taskElement.classList.toggle("completed", checkbox.checked);
//     });

//     const taskDescription = document.createElement('p');
//     taskDescription.textContent = inputText;

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.className = "delete-btn";

//     deleteButton.addEventListener('click', () => {
//         taskElement.remove();
//     });

//     container.append(checkbox, taskDescription, deleteButton);
//     taskElement.append(container);
//     taskListElement.append(taskElement);

//     taskInputElement.value = "";
// }
// addButtonElement.addEventListener('click', addTask)
