const lists = document.querySelectorAll(".list")

const leftBox = document.querySelector("#left")
const rightBox = document.querySelector("#right")

let selected = null;

for (const list of lists) {

    list.addEventListener('dragstart', (e) => {
        selected = e.target;
    });

}

rightBox.addEventListener('dragover', (e) => {
    e.preventDefault();
});

rightBox.addEventListener('drop', () => {
    rightBox.appendChild(selected);
    selected = null;
});

leftBox.addEventListener('dragover', (e) => {
    e.preventDefault();
});

leftBox.addEventListener('drop', () => {
    leftBox.appendChild(selected);
    selected = null;
});