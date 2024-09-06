

function Add(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    /*document.getElementById("output").innerHTML = input.value;*/

    console.log("Hodnota v inputu je: ", input);

    console.log("Hodnota v outputu je: ", output);

    output.innerHTML += i + ". " + input.value + "<br>";
    i++;
}