import data from "./data.json" assert { type: "json"};

$(document).ready(() => {

    let mostExpensiveDay = data[0];

    data.map(record => {
        if(record.amount > mostExpensiveDay.amount){
            mostExpensiveDay = record;
        }
        const el = document.getElementById(record.day);
        initializeBarComponent(el, record);
        addEventListeners(el, record);

    });
    document.getElementById(mostExpensiveDay.day).classList.add("most-expensive");
    $(".bar").animate({height: "hide"}, 1);
    $(".bar").animate({opacity: 1, height: "show"}, 1300);
})

function addEventListeners(el, record){
    el.addEventListener("mouseover", () => {
        document.getElementById("bar-details-label-" + record.day).classList.remove("invisible");
        document.getElementById("bar-details-label-" + record.day).classList.add("visible");
    })
    el.addEventListener("mouseleave", () => {
        document.getElementById("bar-details-label-" + record.day).classList.remove("visible");
        document.getElementById("bar-details-label-" + record.day).classList.add("invisible");
    })
}
function initializeBarComponent(el, record){
    el.style.height = record.amount * 2.5 + "px";
    document.getElementById("bar-details-label-" + record.day).textContent = "$" + record.amount;
}
