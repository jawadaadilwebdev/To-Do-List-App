
// Declaring Variables
// Input Box
const inputBox = document.getElementById('input-box');

// List Container 
const listContainer = document.getElementById('list-container');

// Function for Add Button
function addTask(){
    if (inputBox.value==='') {
        alert('You Must Write Something')
    } else {
        // Creating li for creating list of tasks 
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        // Creating Delete Icon
        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span)
    }
    inputBox.value='';
    saveData();
}

// Function for Delete Task icon and marking as Completed Task
listContainer.addEventListener('click',function(e){
    if (e.target.tagName==='LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)

// Funtion for Saving Data on Browsers local Storage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

// Function for Showcasing browser's local data that we stored in the above funtion 
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask();