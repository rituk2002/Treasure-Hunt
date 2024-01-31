function checkContent() {
    var input = document.getElementById("inputText").value;
    var defaultString = "Olivia Rodrigo";
    if(input === defaultString) {
        document.getElementById("result").innerHTML = "Content matches!!! now go back to the 1st clue page and click on the button o";
        
    } else {
        document.getElementById("result").innerHTML = "Content does not match!";
    }
}
