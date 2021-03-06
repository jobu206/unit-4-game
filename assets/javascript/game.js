/*
DONE: - Goal of game is to click each of the 4 crytals in order to hit the Magic Number
DONE: - Single number given randomly (aka Magic Number)
DONE: - Every crystal needs to have a randomly generated number
DONE: - Each time a crystal is clicked we will add previous score to new score until number is either the same or goes over magic number.
DONE: - If number goes over magic number, we lose
    - decrement loss
DONE: - If number matches magic number, we win
    - increment wins
DONE: - Random number is generated each time player clicks new game button
    - start over
*/

$(document).ready(function () {
    // delcare variables
    var score = 0;
    var wins = 0;
    var losses = 0;

    // random numbers via min/max
    function randomNums(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 1);
    }

    // get magic number
    var magicNum = randomNums(19,120);
    $("#magicNum").text(magicNum);

    // get crystal values via random numbers
    var blackCrystal = randomNums(1,12);
    var purpleCrystal = randomNums(1,12);
    var greenCrystal = randomNums(1,12);
    var redCrystal = randomNums(1,12);


    // reset vars
    function reset() {
        score = 0;
        $(score).text(magicNum);
        playerScore = 0;
        magicNum = randomNums(19,120);
        $("#magicNum").text(magicNum);
        blackCrystal = randomNums(1,12);
        purpleCrystal = randomNums(1,12);
        greenCrystal = randomNums(1,12);
        redCrystal = randomNums(1,12);
    }

    // set on click events
    $("#blackCrystal").on("click", function () {
        score += blackCrystal;
        winsLosses();
        $("#playerScore").text(score);
    });

    $("#purpleCrystal").on("click", function () {
        score += purpleCrystal;
        winsLosses();
        $("#playerScore").text(score);
    });

    $("#greenCrystal").on("click", function () {
        score += greenCrystal;
        winsLosses();
        $("#playerScore").text(score);
    });

    $("#redCrystal").on("click", function () {
        score += redCrystal;
        winsLosses();
        $("#playerScore").text(score);
    });

    // Set wins/losses function
    function winsLosses() {
        if (score === magicNum) {
            wins++;
            alert("Congrats on the win!!");
            $("#wins").text(wins);
            $("#losses").text(losses);
            reset();
        } else if (score > magicNum) {
            losses++;
            alert("My condolences on your loss.");
            $("#losses").text(losses);
            $("#wins").text(wins);
            reset();
        }        
    }
});