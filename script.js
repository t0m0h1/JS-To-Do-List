document.getElementById('add-task-button').addEventListener('click', function() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    if (taskInput.value !== '') {
        var newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);

        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskInput.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = '';
    }
});

window.onload = function() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var taskList = document.getElementById('task-list');

    for (var i = 0; i < tasks.length; i++) {
        var task = document.createElement('li');
        task.textContent = tasks[i];
        taskList.appendChild(task);
    }
};