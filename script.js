document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        li.textContent = taskText;

        // Mark as completed
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();  // Prevent marking as completed when clicking delete
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = ''; // Clear the input field
    }
}