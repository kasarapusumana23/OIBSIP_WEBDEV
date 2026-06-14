let pendingTasks =
JSON.parse(localStorage.getItem("pendingTasks")) || [];

let completedTasks =
JSON.parse(localStorage.getItem("completedTasks")) || [];

displayTasks();

function saveTasks(){

    localStorage.setItem(
        "pendingTasks",
        JSON.stringify(pendingTasks)
    );

    localStorage.setItem(
        "completedTasks",
        JSON.stringify(completedTasks)
    );
}

function addTask(){

    let input =
    document.getElementById("taskInput");

    let task =
    input.value.trim();

    if(task === ""){
        alert("Enter a task!");
        return;
    }

    let dateTime =
    new Date().toLocaleString();

    pendingTasks.push({
        text: task,
        time: dateTime
    });

    input.value = "";

    saveTasks();
    displayTasks();
}

function displayTasks(){

    let pendingList =
    document.getElementById("pendingList");

    let completedList =
    document.getElementById("completedList");

    pendingList.innerHTML = "";
    completedList.innerHTML = "";

    pendingTasks.forEach((task,index)=>{

        let li =
        document.createElement("li");

        li.innerHTML = `
        <div class="task-info">
            <strong>${task.text}</strong>
            <div class="task-time">
                Added: ${task.time}
            </div>
        </div>

        <div class="actions">

            <button class="complete-btn"
            onclick="completeTask(${index})">
            ✓
            </button>

            <button class="edit-btn"
            onclick="editTask(${index})">
            Edit
            </button>

            <button class="delete-btn"
            onclick="deleteTask(${index})">
            Delete
            </button>

        </div>
        `;

        pendingList.appendChild(li);

    });

    completedTasks.forEach((task,index)=>{

        let li =
        document.createElement("li");

        li.innerHTML = `
        <div class="task-info">
            <strong>${task.text}</strong>
            <div class="task-time">
                Completed: ${task.time}
            </div>
        </div>

        <div class="actions">

            <button class="delete-btn"
            onclick="deleteCompleted(${index})">
            Delete
            </button>

        </div>
        `;

        completedList.appendChild(li);

    });

}

function completeTask(index){

    let task =
    pendingTasks.splice(index,1)[0];

    task.time =
    new Date().toLocaleString();

    completedTasks.push(task);

    saveTasks();
    displayTasks();
}

function editTask(index){

    let newTask =
    prompt(
        "Edit Task",
        pendingTasks[index].text
    );

    if(newTask){

        pendingTasks[index].text =
        newTask;

        saveTasks();
        displayTasks();
    }
}

function deleteTask(index){

    pendingTasks.splice(index,1);

    saveTasks();
    displayTasks();
}

function deleteCompleted(index){

    completedTasks.splice(index,1);

    saveTasks();
    displayTasks();
}