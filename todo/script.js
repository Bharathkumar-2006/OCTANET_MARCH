// script.js

// Function to add a task to the todo list
function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskText = inputBox.value.trim();

    if (taskText !== "") {
        const listContainer = document.getElementById("list-container");
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;
        
        const completedButton = document.createElement("button");
        completedButton.className = "completed-btn";
        completedButton.textContent = "Completed";
        newTaskItem.appendChild(completedButton);

        listContainer.appendChild(newTaskItem);
        inputBox.value = "";
    }
}

// Function to toggle the completed status of a task
function toggleCompleted(event) {
    if (event.target.className === "completed-btn") {
        const taskItem = event.target.parentElement;
        taskItem.classList.toggle("checked");
    }
}
