// IMAGE CHANGE

const dots = document.querySelectorAll(".dot");
const productImg = document.querySelector("#productImg");

dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        // remove active class
        dots.forEach((item) => {
            item.classList.remove("active");
        });

        // active current dot
        dot.classList.add("active");

        // image change
        productImg.src = dot.dataset.image;
    });

});

// SIZE SELECT

const sizes = document.querySelectorAll(".sizes span");

sizes.forEach((size) => {

    size.addEventListener("click", () => {

        sizes.forEach((item) => {
            item.classList.remove("active-size");
        });

        size.classList.add("active-size");

    });

});

// COLOR SELECT

const colors = document.querySelectorAll(".color");

colors.forEach((color) => {

    color.addEventListener("click", () => {

        colors.forEach((item) => {
            item.classList.remove("active-color");
        });

        color.classList.add("active-color");

    });

});