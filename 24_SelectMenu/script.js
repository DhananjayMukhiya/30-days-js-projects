const selectBtn = document.getElementById("selectBtn");
const options = document.getElementById("options");
const selectedText = document.getElementById("selectedText");
const optionItems = document.querySelectorAll(".option");
const arrow = document.getElementById("arrow");

// Open Dropdown

selectBtn.addEventListener("click", () => {

    options.classList.toggle("active");

    arrow.classList.toggle("rotate");
});

// Select Option

optionItems.forEach(option => {

    option.addEventListener("click", () => {

        selectedText.innerText = option.innerText;

        options.classList.remove("active");
        arrow.classList.remove("rotate");
    });

});

// Close Outside Click

document.addEventListener("click", (e) => {

    if (!selectBtn.contains(e.target) &&
        !options.contains(e.target)) {

        options.classList.remove("active");

        arrow.classList.remove("rotate");
    }

});