document.addEventListener("DOMContentLoaded", function(event) { 

    // Prompt user for input via pop-up box and store as variable called 'answer'
    let answer = parseInt(prompt("Please enter a number to FizzBuzz: ")); 

    // get the div
    let container = document.getElementById('log');

    function fizzBuzz() {
        container.innerHTML += "<p class='fizzbuzz'>FizzBuzz!</p>";
    };

    function fizz() {
        container.innerHTML += "<p class='fizz'>Fizz!</p> ";
    };

    function buzz() {
        container.innerHTML += "<p class='buzz'>Buzz!</p> ";
    };

    function enterNumber(x) {
        container.innerHTML += "<p>" + x + "...</p>" + "\n\n";
    }
    

    function lastWords() {
        container.innerHTML += "<p>&nbsp;You're all FizzBuzzed out!</p>\n\n";
    }

   

    // Loop from 1 to 'answer' incrementing by 1
    for (let i = 1; i <= answer; i++) {
        setTimeout(function timer() {
            // code here
             // check if current number is divisible by 3 AND 5 and if yes print "FizzBuzz"
             if (i % 3 === 0 && i % 5 === 0) {
                fizzBuzz();
            // check if current number is divisible by 3 and if yes print "Fizz"
            } else if (i % 3 === 0) {
                fizz();
            // else if current number is divisible by 5 then print "Buzz"
            } else if (i % 5 === 0) {
                buzz();
            } else {
                enterNumber(i);
            };
            
        }, i * 500);
        
    };
    let duration = answer * 500 + 500;
    setTimeout(lastWords, duration);
    

    
    
   
});
