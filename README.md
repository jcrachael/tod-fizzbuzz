# FizzBuzz
## A simple javascript counting game.

### The problem
Write a program that allows a user to enter a number, then prints each number between 1 and the user's chosen number (input), but for numbers that divide by 3 print "Fizz" and for numbers that divide by 5 print "Buzz", and for numbers that divide by 3 AND 5, print "FizzBuzz".

The user will input their number via a browser prompt pop-up console.

The output will be a list of numbers from 1 to the input, but: 
- each multiple of 3 is "Fizz"  
- each multiple of 5 is "Buzz" and 
- each multiple of 3 AND 5 is "FizzBuzz".

### Pseudocode
Prompt user to input a number
When user inputs a number
Loop from 1 to the user's input number
    For each number in the loop:
        If the current number is divisible by 3 then print "Fizz"
        If the current number is divisible by 5 then print "Buzz"
        If the current number is divisible by 3 AND 5 then print "FizzBuzz"
        Else print the current number