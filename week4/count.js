let count = 0;
const counterdisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

// increase button
increaseBtn.addEventListener("click",() =>{
    count = -1;
    counterdisplay.textContent = count;
});

// decrease button
decreaseBtn.addEventListener("click",() =>{
    count = +1;
    counterdisplay.textContent = count;
});