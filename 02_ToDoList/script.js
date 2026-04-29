const inputBox = document.querySelector('#inputBox')
const addBtn = document.querySelector('#addBtn')
const toDoList = document.querySelector('.todolist')

let editToDo = null

function editLocalToDo(oldTodo, newTodo) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    let index = todos.indexOf(oldTodo);

    if (index !== -1) {
        todos[index] = newTodo;
    }

    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteLocalToDo(todo) {
    let todos = []

    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    let toDoText = todo.children[0].innerHTML
    let toDoIndex = todos.indexOf(toDoText)

    todos.splice(toDoIndex, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function saveLocalTODo(todo) {
    let todos = []

    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))

}

function getLocalToDo() {
    let todos = []

    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
        todos.forEach(todo => {
            const li = document.createElement("li")
            const p = document.createElement("p")

            const addText = document.createTextNode(todo)
            p.appendChild(addText)
            li.appendChild(p)

            const deleteListBtn = document.createElement("button")
            deleteListBtn.appendChild(document.createTextNode("Remove"))
            deleteListBtn.style.backgroundColor = "#ff0000"
            deleteListBtn.style.color = "#fff"

            const editListBtn = document.createElement("button")
            editListBtn.appendChild(document.createTextNode("Edit"))
            editListBtn.style.backgroundColor = "#00a500"
            editListBtn.style.color = "#fff"

            li.appendChild(editListBtn)
            li.appendChild(deleteListBtn)

            toDoList.appendChild(li)
        });
    }
}

function addToDo() {
    const inputText = inputBox.value.trim()

    if (inputText === "") {
        alert("Please enter a task");
        return;
    }

    if (addBtn.value === "Edit") {
        let oldText = editToDo.target.previousElementSibling.innerHTML
        editToDo.target.previousElementSibling.innerHTML = inputText
        editLocalToDo(oldText, inputText)
        addBtn.value = "Add"
        inputBox.value = ""
        return
    }

    const li = document.createElement("li")
    const p = document.createElement("p")

    const addText = document.createTextNode(inputText)
    p.appendChild(addText)
    li.appendChild(p)

    const deleteListBtn = document.createElement("button")
    deleteListBtn.appendChild(document.createTextNode("Remove"))
    deleteListBtn.style.backgroundColor = "#ff0000"
    deleteListBtn.style.color = "#fff"

    const editListBtn = document.createElement("button")
    editListBtn.appendChild(document.createTextNode("Edit"))
    editListBtn.style.backgroundColor = "#00a500"
    editListBtn.style.color = "#fff"

    li.appendChild(editListBtn)
    li.appendChild(deleteListBtn)

    toDoList.appendChild(li)

    inputBox.value = ""

    saveLocalTODo(inputText)
}

function updateTodo(e) {
    // console.log(e.target);
    if (e.target.innerHTML == "Remove") {
        toDoList.removeChild(e.target.parentElement)
        deleteLocalToDo(e.target.parentElement)
    } else if (e.target.innerHTML == "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML
        inputBox.focus()
        addBtn.value = "Edit"
        editToDo = e
    }
}

document.addEventListener('DOMContentLoaded', getLocalToDo)

addBtn.addEventListener('click', addToDo)
toDoList.addEventListener('click', updateTodo)