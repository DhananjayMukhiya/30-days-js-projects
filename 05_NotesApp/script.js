const createNotesBtn = document.querySelector('#createNotesBtn');
const notesContainer = document.querySelector('.notes-container');

// 🔹 Show saved notes on reload
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// 🔹 Update localStorage
function updateLocalStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
    
}

// 🔹 Create new note
createNotesBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    updateLocalStorage(); // ✅ immediately save
});

// 🔹 Delete note (event delegation)
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateLocalStorage();
    }
});

// 🔹 Auto save while typing (BEST WAY)
notesContainer.addEventListener("keyup", () => {
    updateLocalStorage();
});

// 🔹 Enter key fix
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});