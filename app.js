function getNum(val) {
    let scr = document.getElementById("scr");
    scr.value += val;
}

function foo(sym) {
    let scr = document.getElementById("scr");
    let arr = ["+", "-", "/", "*"];
    for (let i = 0; i < arr.length; i++) {
        if (scr.value[scr.value.length - 2] === arr[i]) {
            scr.value = scr.value.slice(0, -2) + sym;
        }
    }
}

function clr() {
    let scr = document.getElementById("scr");
    scr.value = "";
}

function sum() {
    let scr = document.getElementById("scr");
    scr.value = eval(scr.value);
}

function del() {
    let scr = document.getElementById("scr");
    scr.value = scr.value.slice(0, -1);
}