// VARIABLES

// randomly generated number
var targetNum = [];

// counter variable
var counter = 0;

// Random numbers generated for each crystal
var cOne = [];
var cTwo = [];
var cThree = [];
var cFour = [];

// reset function

// loop:

document.onkeyup = function() {
      
    //generate target number
        targetNum = Math.floor(Math.random() * 120) +19;
        console.log(targetNum);
        $(".target-number").html(targetNum);
        
        
        // randomly generate value for crystal one 
        // apply it to crystal one using .attr
        cOne = Math.floor(Math.random() * 12) + 1;
            $(".crystal-one").attr(cOne);
            console.log(cOne);


        // ditto for crystals two, three and four.
        cTwo = Math.floor(Math.random() * 12) + 1;
            $(".crystal-two").attr(cTwo);
            console.log(cTwo);

        cThree = Math.floor(Math.random() * 12) + 1;
            $(".crystal-three").attr(cThree);
            console.log(cThree);

        cFour = Math.floor(Math.random() * 12) + 1;
            $(".crystal-four").attr(cFour);
            console.log(cFour);


};

// game scoring
        //add each attributed value of the crystal added to the score counter when clicked

$(".crystal-one").click = function() {

    counter += cOne;
    console.log("testing testing");

}







// win/loss
        //if the counter reaches the value of the randomly generated target number the player wins, display win message, game resets.

        //if the counter goes over the value of the target number the player loses, display loss message, game resets.