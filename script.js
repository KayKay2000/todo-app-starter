// add items to complete-items or incomplete-items at the end of the loop

// for ( let i = 0; i < toDoItems.length; i++){
    

// }


function completeListCreator(task){
    const li = document.createElement("li");
    li.innerHTML = task;
    const completeUl = document.querySelector("#complete-items");
    completeUl.appendChild(li);

}

function incompleteListCreator(task){
    const li = document.createElement("li");
    li.innerHTML = task;
    const incompleteUl = document.querySelector("#incomplete-items");
    incompleteUl.appendChild(li);

}

for (let boolean in todoItems) {
    if (todoItems[boolean].completed == true){
        completeListCreator(todoItems[boolean].title)
    }
    else {
        incompleteListCreator(todoItems[boolean].title)
    }
    

}



