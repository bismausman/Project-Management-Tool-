document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('project-list');
    const taskList = document.getElementById('task-list');
    const addProjectBtn = document.getElementById('add-project-btn');
    const addTaskBtn = document.getElementById('add-task-btn');

    addProjectBtn.addEventListener('click', function() {
        const projectName = prompt('Enter project name:');
        if (projectName) {
            const projectItem = document.createElement('li');
            projectItem.textContent = projectName;
            projectList.appendChild(projectItem);
        }
    });

    addTaskBtn.addEventListener('click', function() {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskName;
            taskList.appendChild(taskItem);
        }
    });
});
