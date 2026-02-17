let About = document.getElementById(`about`);
about.textContent = "Welcome";
about.style.color = "red";
// document object model

// event handaling
let contactBtn = document.getElementById(`contact`);
contactBtn.addEventListener(`click`, () => {
    contactBtn.style.color = "yellow";
    alert("button clicked");
});