let i = 1;

function Add(isEmoji = false) {
    let input = document.getElementById("input");
    let output = document.getElementById("output");

 
    if (isEmoji) {
        output.innerHTML += input.value + "🍆<br>";
    } else {

        output.innerHTML += input.value + "";
        input.value = "";
    }
}

function clearContent() {
    let output = document.getElementById("output");
    output.innerHTML = ""; // Vyprázdníme obsah výstupu
    i = 1; // Resetujeme číslování
}