const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <div class="buttons">
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">X</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

// Delete task
function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

// Toggle completed
function toggleTask(task) {
    task.parentElement.classList.toggle("completed");
}

// Edit task
function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector("span");
    const currentText = span.textContent;

    const newText = prompt("Update your task:", currentText);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}
