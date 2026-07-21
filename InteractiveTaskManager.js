document.getElementById('submit').addEventListener('click', function(event){
    submitForm();
    event.preventDefault();
});

// Creates the task list and ids
const tasks=[];
var id = 0

function submitForm(){
    // Adds an id to each submission
    id = id + 1
    
    // Gets user input
    var t = document.getElementById('task');
    var name = t.value;
    
    var p = document.getElementById('priority');
    var priority = p.value;
    
    var i = document.getElementById('importance');
    var isImportant = i.value;
    
    var today = new Date();
    var date = today.toLocaleDateString('en-US');

    var x = {id, name, priority, isImportant, date};
    tasks.push(x);

    var info = JSON.stringify(tasks);
    
    // Displays the output to the screen and console.
    // (I was unable to figure out how to display seperate parts of the task list to the screen 
    // and so I couldn't add the addition features that go along with each individual task)
    document.getElementById("taskmanager").innerHTML = info;
    console.log(JSON.stringify(tasks,null,4));

}