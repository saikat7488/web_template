
var menu_bar = document.querySelector("#menu_bar");
var headerId = document.querySelector("#headerId");

menu_bar.onclick = function () {
    headerId.classList.toggle("active");
};
