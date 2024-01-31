function checkContent() {
    var input = document.getElementById("inputText").value;
    var defaultString = "globe";
    function myFunction() {
        window.location.href = "dead_end.html";
        }
    if(input === defaultString) {
        document.getElementById("result").innerHTML = "Content matches!!! now click on the rightmost-bottom button";
        
    } 
    else if(input === "world") {
       alert("Yeah!! you found the word but the answer is not this, the answer is a synonym of this word.\nBeware, one of the guesses is a dead end also.");
    } 
    else if(input === "earth") {
        myFunction();
     }  
    else if(input === "duniya" || input==="prithvi" ) {
        alert("Trying hindi thats not gonna work the answer is a english world");
     } 
    
    else {
        alert("Try again");
    }
}
