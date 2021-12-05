var taskInput = document.getElementById('taskInput');
var taskHolder = document.getElementById("task-holder");
var taskDiv = document.getElementsByClassName('task');


document.getElementById("taskInput")
    .addEventListener("keyup", function(evt) {
    evt.preventDefault();
    if (evt.key === 'Enter') {
        submitTask();
    }
});

function submitTask() {

    console.log("Button Clicked");

    //Get Input value
    var val = taskInput.value;
    console.log(val);

    //Check input value is empty or not
    if (val !== "") {
        //create div .task element
        var taskDiv = document.createElement("div");
        taskDiv.className = "task";
        

        var delBtn = document.createElement("button");
        delBtn.innerHTML = "Remove";
        delBtn.className = "delButton";

        delBtn.addEventListener('click', delTask);
        

        //creaTE p tag
        var pEle = document.createElement("p");
        pEle.innerHTML = val;

        taskDiv.append(pEle);
        taskDiv.append(delBtn);

        taskHolder.append(taskDiv);

        //clear input data
        taskInput.value = "";

    } else {
        alert('Please fill in task.');

    }
}
//delTask Function reference
 function delTask() {
    //this.style.textDecoration = "line-through";
    if(confirm("Are you Sure?")) {
        taskDiv[0].remove();
    } else {

    }
    // this.remove(); //this is better because it will remove the element. Save space.
    // this.style.display = "none";
}
