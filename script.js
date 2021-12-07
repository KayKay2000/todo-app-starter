const incompleteUl = document.querySelector("#incomplete-items");
const completeUl = document.querySelector("#complete-items");

function completeListCreator(task){
    const li = document.createElement("li");
    li.innerHTML = task.title;
    li.setAttribute("class", "list-group list-group-flush list-group-item" )
    const btnInput = document.createElement("input")
    const label = document.createElement("label")
    const div = document.createElement("div")
    div.setAttribute( "class", "form-check" )
    Object.assign(btnInput, {
        class: "form-check-input",
        type: "checkbox",
        value: "",
        id: "flexCheckChecked",
        checked: " ",
    })
    Object.assign(label, {
        class: "form-check-label",
        for: "flexCheckChecked" 
    })
    li.appendChild(btnInput)
    completeUl.appendChild(li);
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.addEventListener("click", () =>
    {li.remove()})
    li.appendChild(deleteBtn);
    btnInput.addEventListener("click", () =>
    {
        li.remove(); incompleteUl.appendChild(li);
    })
}

function incompleteListCreator(task){
    const li = document.createElement("li");
    li.innerHTML = task.title;
    li.setAttribute("class", "list-group list-group-flush list-group-item" )
    const btnInput = document.createElement("input")
    const label = document.createElement("label")
    const div = document.createElement("div")
    div.setAttribute( "class", "form-check" )
    Object.assign(btnInput, {
        class: "form-check-input",
        type: "checkbox",
        value: "",
        id: "flexCheckDefault",
    })
    Object.assign(label, {
        class: "form-check-label",
        for: "flexCheckDefault" 
    })
    li.appendChild(btnInput)
    incompleteUl.appendChild(li);
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.addEventListener("click", () =>
    {li.remove()})
    li.appendChild(deleteBtn);
    btnInput.addEventListener("click", () =>
    {
        li.remove(); completeUl.appendChild(li);
    })

}

let input = document.querySelector(".form-control")
let addBtn = document.querySelector("#button-addon2")
let toDoForm = document.querySelector("#todoForm")
toDoForm.addEventListener("submit", event=> {
    event.preventDefault()
    let newObject = {
        id: (todoItems.length) + 1,
        title: input.value,
        complete: false
    } 
    todoItems.push(newObject)
    incompleteListCreator(newObject)
    input.value = ""
})
for (let boolean in todoItems) {
    if (todoItems[boolean].completed == true){
        completeListCreator(todoItems[boolean])
    }
    else {
        incompleteListCreator(todoItems[boolean])
    }
}




