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


// win and loss counters

var wins = 1;
var losses = 1;
// reset function

function Reset() {
    cOne = [];
    cTwo = [];
    cThree = [];
    cFour = [];
    targetNum = [];
    counter = 0;
    $(".score-display").html(counter);
    NumGen();
};

function NumGen() {


    //generate target number
    targetNum = Math.floor(Math.random() * 120) + 19;
    console.log(targetNum);
    $(".target-number").html(targetNum);


    // randomly generate value for crystals 

    cOne = Math.floor(Math.random() * 12) + 1;
    console.log(cOne);


    cTwo = Math.floor(Math.random() * 12) + 1;
    // console.log(cTwo);



    cThree = Math.floor(Math.random() * 12) + 1;
    // console.log(cThree);


    cFour = Math.floor(Math.random() * 12) + 1;
    // console.log(cFour);

};


function Scoring() {
    
    $(".crystal-one").click(function () {
       
        counter += cOne;

        // console.log(counter);
        $(".score-display").html(counter);
        if (counter === targetNum) {
            alert("You win!");
            $("#wincounter").html(wins ++)
            Reset();
    
        }
    
    
    
        else if (counter >= targetNum) {
            alert("You lose!!");
            $("#losscounter").html(losses ++)
            Reset();
    
        }
    

   
     
    });
    
    
 
    $(".crystal-two").click(function () {
       

        counter += cTwo;

        // console.log(counter);
        $(".score-display").html(counter);
        if (counter === targetNum) {
            alert("You win!");
            $("#wincounter").html(wins ++)
            Reset();
    
        }
    
    
    
        else if (counter >= targetNum) {
            alert("You lose!!");
            $("#losscounter").html(losses ++)
            Reset();
    
        }
    
    

    });
  
  
   
    $(".crystal-three").click(function () {
        

        counter += cThree;

        // console.log(counter);
        $(".score-display").html(counter);
        if (counter === targetNum) {
            alert("You win!");
            $("#wincounter").html(wins ++)
            Reset();
    
        }
    
    
    
        else if (counter >= targetNum) {
            alert("You lose!!");
            $("#losscounter").html(losses ++)
            Reset();
    
        }
    
   
    
    });


   
    $(".crystal-four").click(function () {
        

        counter += cFour;

        // console.log(counter);
        $(".score-display").html(counter);
        if (counter === targetNum) {
            alert("You win!");
            $("#wincounter").html(wins ++)
            Reset();
    
        }
    
    
    
        else if (counter >= targetNum) {
            alert("You lose!!");
            $("#losscounter").html(losses ++)
            Reset();
    
        }
    

       
    });
    
};



// Winning and losing




NumGen();

Scoring();

// WinLossReset();





