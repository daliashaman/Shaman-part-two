/*
Prompt user for their name
prompt user if they would like to play 3 to 6 holes of mini golf
prompt user either 3 times or 6 times for each "hole of golf" asking for the # of putts for that specific hole.
    - depends on input for second prompt
    -loop? How to add numbers?
    The more loops, the more the total increases
Print their total in console with message.
keep track of total # of putts compare to total course par to calculate total par for round.
    -If total is (>0), then over par (+) message
    -If total is (<0), then under par (-) message
    -If total is (=0), then even with par (0) message
*/

var name = window.prompt("Welcome to mini golf! What is your name?");

var number = prompt ("Hi " + name + "! Would you like to play 3 or 6 holes?");

let total = 0;

let holenumber = 1;

for (let i = 0; i < number; i++ ) {
  let putts = Number(prompt("How many putts for hole " + holenumber++ + "? (par: 3)"));
  total += putts;
}

let total2 = total-9;
let total3 = total-18;

if (number == 3) {

    if(total2 >0) {
        console.log("Nice try, " + name + "... Your total par was: +" + total2 + ".");
    }
    if(total2 <0) {
        console.log("Great job, " + name + "! Your total par was: " + total2 + ".");
    }
    if(total2 ==0) {
        console.log("Good game, " + name + ". Your total par was: 0.");
    }
} else if (number == 6) {

    if(total3 >0) {
        console.log("Nice try, " + name + "... Your total par was: +" + total3 + ".");
    }   
    if(total3 <0) {
        console.log("Great job, " + name + "! Your total par was: " + total3 + ".");
    }
    if(total3 ==0) {
        console.log("Good game, " + name + ". Your total par was: 0.");
    }
}