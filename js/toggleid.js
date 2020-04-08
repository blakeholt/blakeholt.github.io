
function _ToggleIt() {
    let mode = localStorage.getItem("mode");
    let tog = "light";
    if (mode === "light") {
        tog = "dark";
    }

    let _items = document.querySelectorAll(".bg-" + mode);
    let _nav = document.querySelectorAll(".navbar-" + mode);
    let _texts = document.querySelectorAll(".text-" + tog);
    _items.forEach(function (item) {
        item.classList.add("bg-" + tog);
        item.classList.remove("bg-" + mode);
    });
    _nav.forEach(function (item) {
        item.classList.add("navbar-" + tog);
        item.classList.remove("navbar-" + mode);
    });
    _texts.forEach(function (item) {
        item.classList.add("text-" + mode);
        item.classList.remove("text-" + tog);
    });
    if (mode === "dark") {
        getID("_Toggle").src = "img/Logo-Light.png";
        getID("_ghimg").src = "img/GH2.png";
        mode = "light";
    } else {
        getID("_Toggle").src = "img/Logo-Dark.png";
        getID("_ghimg").src = "img/GH.png";
        mode = "dark";
    }
}

window.onload = function () {
    let check = localStorage.getItem("check");
    console.log(check);
    if(!check){
        localStorage.setItem("mode", "light");
        console.log("ye");
    }
        
    localStorage.setItem("check", "a");
    checkDate();
    getID("_Toggle").addEventListener("click", _Toggle);
    _ToggleIt();
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function _Toggle(){
    let mode = localStorage.getItem("mode");
    if (mode === "light") {
        localStorage.setItem("mode","dark");
    }else{
        localStorage.setItem("mode","light");
    }
    _ToggleIt();
}