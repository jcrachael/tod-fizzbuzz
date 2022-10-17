document.addEventListener("DOMContentLoaded", function(event) { 

    // Prompt user for input via pop-up box and store as variable called 'answer'
    let answer = parseInt(prompt("Please enter a number to FizzBuzz: ")); 

    // get the div
    let container = document.getElementById('log');

    // Loop from 1 to 'answer' incrementing by 1
    for (let i = 1; i <= answer; i++) {
        // check if current number is divisible by 3 AND 5 and if yes print "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            container.innerHTML += "<p class='fizzbuzz'>FizzBuzz!</p>";
        // check if current number is divisible by 3 and if yes print "Fizz"
        } else if (i % 3 === 0) {
            container.innerHTML += "<p class='fizz'>Fizz!</p> ";
        // else if current number is divisible by 5 then print "Buzz"
        } else if (i % 5 === 0) {
            container.innerHTML += "<p class='buzz'>Buzz!</p> ";
        } else {
            container.innerHTML += i + "..." + "\n\n";
        }
    }

    container.innerHTML += "<p>You're all FizzBuzzed out!</p>\n\n"
   
});

