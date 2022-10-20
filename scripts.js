document.addEventListener("DOMContentLoaded", function(event) { 



    // get the div
    let container = document.getElementById('log');

    // hide button
    let button = document.querySelector('button');
    button.style.display = 'none';
    button.addEventListener('click', getInput);

    // define functions
    function fizzBuzz() {
        container.innerHTML += "<p class='fizzbuzz'>&nbsp;FizzBuzz!&nbsp;</p>";
    };

    function fizz() {
        container.innerHTML += "<p class='fizz'>fizz!&nbsp;</p> ";
    };

    function buzz() {
        container.innerHTML += "<p class='buzz'>buzz!&nbsp;</p> ";
    };

    function enterNumber(x) {
        container.innerHTML += "<p>" + x + "...</p>" + "\n\n";
    }
    
    function waiting() {
        container.innerHTML += '<br><p>...</p>';
    }

    function lastWords() {
        container.innerHTML += "<br><p>...You're all FizzBuzzed out!</p>\n\n";
    }

    function playAgain() {
        container.innerHTML += "<br><p>Would you like to FizzBuzz again?</p><br>";
        button.style.display = 'inline';
    }

    // get input
    function getInput () {
        let answer = parseInt(prompt("Please enter a number to FizzBuzz: ")); 
        container.innerHTML = ''
        button.style.display = 'none'
        
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
    let duration2 = duration + 500;
    let duration3 = duration2 + 500;
    setTimeout(waiting, duration);
    setTimeout(lastWords, duration2);
    setTimeout(playAgain, duration3);


    }

    
getInput();

    
   

    
    
    

    
    
   
});
