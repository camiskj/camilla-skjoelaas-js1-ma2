//Question 1

const firstButton = document.querySelector("#bg");

firstButton.onclick = function () {
    console.log(event.target);

    document.body.style.background = "green";
}

//Question 2

const secondButton = document.querySelector(".toggler");
const toggleDiv = document.querySelector(".togglee")

secondButton.onclick = function () {
    console.log(event.target);

    toggleDiv.classList.toggle("extra");
}

//Question 3

const select = document.querySelector("select");
const paragraphChange = document.querySelector(".paragraphs-container");

select.onchange = function () {
    console.log(event.target.value);

    const selectedValue = this.value;

    paragraphChange.innerHTML = "";

    for (let i = 1; i <= selectedValue; i++) {
        paragraphChange.innerHTML += `<p class="content"></p>`;
    }
};

//Question 4

const textInput = document.querySelector(".input");
const counter = document.querySelector(".char-count b");

textInput.onkeyup = function () {
    console.log(event.target.value.length);

    const len = event.target.value.length;

    counter.innerHTML = len;
}

//Question 5

const body = document.querySelector("body");

function handleScroll() {
    console.log(window.scrollY);

    const scrolledY = window.scrollY;

    if (scrolledY >= 35) {
        document.body.classList.add("highlight");
    }
    else {
        document.body.classList.remove("highlight");
    }
}

window.addEventListener("scroll", handleScroll);

