let taskArray = [];
function addTask() {
    const  task = {
        taskTitle: document.getElementById("taskTitle").value,
        assignedTo: document.getElementById("assignedTo").value,
        budget: document.getElementById("budget").value,
        description: document.getElementById("description").value,
        done: false,
    };
    taskArray.push(task);
    displayData();
    // console.log(taskArray);
}

function displayData() {
    let display = "";
    for (let i = 0; i < taskArray.length; i++) {
        // display += '<tr> <td>' + taskArray[i].taskTitle + '</td></tr>' 
        display += `<tr onclick='fillModal(${i})' data-bs-toggle"modal" data-bs-target="#exampleModal">
            <td>  ${i + 1} </td>
            <td>  ${taskArray[i].taskTitle} </td>
            <td>  ${taskArray[i].assignedTo} </td>
            <td>  ${taskArray[i].budget} </td>
            <td> ${taskArray[i].description}</td>
            <td> <button onClick= "deleteOption()"> Delete </button> 
                <button>Edit</button> </td>
            </tr>`
    }
    
    document.getElementById("displayContent").innerHTML = display;
}

function deleteOption() {
   taskArray.shift();
   displayData();
  
}
    
function fillModal(index) {
    document.getElementById("displayTaskTitle").innerText = taskArray[index].taskTitle;
    document.getElementById("displayTaskDescription").innerText = taskArray[index].description;
}