//the first 300 lines of code are the variables I used

//lets get some epic music
var song = new Audio("https://codehs.com/uploads/7bccf0aa7e4c4906bc78edac800c787f");
song.loop = true;
//song.play();

//these are the sound effects used throughout the game
var firstExplaination = new Audio("https://codehs.com/uploads/4d8abd344acd5bab9d3a86119aa53fee");
var secondExplaination = new Audio("https://codehs.com/uploads/a860d97080f235576978ef635754a706");
var thirdExplaination = new Audio("https://codehs.com/uploads/fa73466f698cc2fa7bcc5150e2175443");
var fourthExplaination = new Audio("https://codehs.com/uploads/1e7268fa57433bb2437f93706a208e8d");
var fifthExplaination = new Audio("https://codehs.com/uploads/b33f94c407153c653129764935b82359");
var sixthExplaination = new Audio("https://codehs.com/uploads/19ce3ea2c9c2da6da07ea51d9643cd90");
var seventhExplaination = new Audio("https://codehs.com/uploads/85e54174f4a4e31516182aabb40d3ed4");
var eighthExplaination = new Audio("https://codehs.com/uploads/4d28cbc9e5558328af58d859706d2b52");
var ninethExplaination = new Audio("https://codehs.com/uploads/46ebc251cb1014500697e2e82c035fa7");
var tenthExplaination = new Audio("https://codehs.com/uploads/17313af5e6774dec072d24fff419c6bb");
var tieExplaination = new Audio("https://codehs.com/uploads/7699d61d8f28aeeadb1e222bc93bc047");
var buttonClick = new Audio("https://codehs.com/uploads/47be855ea4790ddeee31b3abafc4425d");
var computerRandomness = new Audio("https://codehs.com/uploads/d3123ecd2e234a8bd4d269e3202c9c32");
var winSound = new Audio("https://codehs.com/uploads/19a224654c885ff890e9f2e3957b6684");
var lossSound = new Audio("https://codehs.com/uploads/0e32b62b7857f66fb61c658e91d2d3b8");

//these are handy colors that I used
var peach = new Color(255, 210, 114);
var pink = new Color(255,0,255);
var magenta = new Color(55,0,55);

//game stat variables
var circle = new Circle(0);
var color = Randomizer.nextColor();
var difficulty = "easy";
var winsCirc = new Circle(1);
winsCirc.setPosition(0, -100);
add(winsCirc);
var wins = winsCirc.getX();
var winsNumText = new Text(wins, "40pt Arial");
winsNumText.setPosition(130, 450);
winsNumText.setColor(Color.green);
var gameWinsCirc = new Circle(1);
gameWinsCirc.setPosition(0, -100);
add(gameWinsCirc);
var gameWins = gameWinsCirc.getX();
var lossesCirc = new Circle(1);
lossesCirc.setPosition(0, -100);
add(lossesCirc);
var losses = lossesCirc.getX();
var lossesNumText = new Text(losses, "40pt Arial");
lossesNumText.setPosition(270, 450);
lossesNumText.setColor(Color.red);
var gameLossesCirc = new Circle(1);
gameLossesCirc.setPosition(0, -100);
add(gameLossesCirc);
var gameLosses = gameLossesCirc.getX();
var compareText = new Text("to", "40pt Arial");
compareText.setPosition(195, 450);
var playedCirc = new Circle(1);
playedCirc.setPosition(0, -100);
add(playedCirc);
var played = playedCirc.getX();
var roundsCirc = new Circle(1);
roundsCirc.setPosition(1, -100);
add(roundsCirc);
var rounds = roundsCirc.getX();
var roundText = new Text("Round", "40pt Arial");
roundText.setPosition(getWidth()/2 - 100, 50);
var roundNumText = new Text(rounds, "40pt Arial");
roundNumText.setPosition(getWidth()/2 + 70, 50);


//these are images I used in the beginning screen

//arrow image

// arrow.setSize(30,30);
// arrow.setRotation(90);
// arrow.setPosition(290, 250);

//rules image
var rules = new WebImage("https://i.imgur.com/YS5ztzD.jpeg");
rules.setSize(400, 350);
rules.setPosition(0, 60);

//stats image
var statsImage = new WebImage("https://i.imgur.com/Y11fs6g.jpeg");
statsImage.setSize(400,400);

//this explains how many wins are needed in a round to win a match
var bestOfText = new Text("Match is decided when you or computer wins 5 rounds", "12pt Arial");
bestOfText.setPosition(7, 450);


//random variables that need to be public (Not declared inside of a function)
var winsAdjustingLength = 0;
var winsTextHighlight = new Text(wins, "30pt Arial");
winsTextHighlight.setPosition(78 - winsAdjustingLength,335);
winsTextHighlight.setColor(Color.black);
var winsText = new Text(gameWins, "30pt Arial");
winsText.setPosition(80 - winsAdjustingLength,333);
winsText.setColor(peach);
var lossesAdjustingLength = 0;
var lossesTextHighlight = new Text(losses, "30pt Arial");
lossesTextHighlight.setPosition(283 - lossesAdjustingLength,335);
lossesTextHighlight.setColor(Color.black);
var lossesText = new Text(losses, "30pt Arial");
lossesText.setPosition(285 - lossesAdjustingLength,333);
lossesText.setColor(Color.green);
var GAP = 4;
var timeMakeUp = 0.75;
var WIDTH = getWidth();
var BOTTOM_Y = getHeight();
var TOP_Y = getHeight() / 2;
var playedTextHighlight = new Text(played, "30pt Arial");
playedTextHighlight.setPosition(215,396);
playedTextHighlight.setColor(Color.black);
var playedText = new Text(played, "30pt Arial");
playedText.setPosition(217,394);
playedText.setColor(pink);
var statBackButtonOutline1 = new Rectangle(148, 67);
statBackButtonOutline1.setPosition(117, 407);
var statBackButtonOutline2 = new Rectangle(140, 59);
statBackButtonOutline2.setPosition(121, 411);
statBackButtonOutline2.setColor(pink);
var statBackButton = new Text("Back", "45pt Arial");
statBackButton.setPosition(124, 463);
statBackButton.setColor(magenta);
var settingsTitle = new Text("Settings", "30pt Arial");
settingsTitle.setPosition(125, 45);
var selectionsText = new Text("Click Your Selection", "30pt Arial");
selectionsText.setPosition(20,50);
selectionsText.setColor(Color.black);
var selectionImage = new WebImage("https://i.imgur.com/a8lxTv2.jpg");
selectionImage.setPosition(10, 30);
selectionImage.setSize(400,400);

//this variable changes the arm height in the animation
var ARMHEIGHT = -150;

//this variable changes the text height in the animation screen
var TEXTHEIGHT = 300;


//this is text that is used to tell the user what they played

var rockText = new Text("Rock!", "30pt Arial");
rockText.setPosition(getWidth()/3, ARMHEIGHT + TEXTHEIGHT);
rockText.setColor(peach);
var rockTextBack = new Text("Rock!", "30pt Arial");
rockTextBack.setPosition(getWidth()/3 - 1.5, ARMHEIGHT + TEXTHEIGHT + 1.5);
var scissorsText = new Text("Scissors!", "30pt Arial");
scissorsText.setPosition(getWidth()/4, ARMHEIGHT + TEXTHEIGHT);
scissorsText.setColor(peach);
var scissorsTextBack = new Text("Scissors!", "30pt Arial");
scissorsTextBack.setPosition(getWidth()/4 - 1.5, ARMHEIGHT + TEXTHEIGHT + 1.5);
var paperText = new Text("Paper!", "30pt Arial");
paperText.setPosition(getWidth()/4 + 36, ARMHEIGHT + TEXTHEIGHT - 10);
paperText.setColor(peach);
var paperTextBack = new Text("Paper!", "30pt Arial");
paperTextBack.setPosition(getWidth()/4 - 1.5 + 36, ARMHEIGHT + TEXTHEIGHT - 8.5);
var spockText = new Text("Spock!", "30pt Arial");
spockText.setPosition(getWidth()/4 + 36, ARMHEIGHT + TEXTHEIGHT - 10);
spockText.setColor(peach);
var spockTextBack = new Text("Spock!", "30pt Arial");
spockTextBack.setPosition(getWidth()/4 - 1.5 + 36, ARMHEIGHT + TEXTHEIGHT - 8.5);
var lizardText = new Text("Lizard!", "30pt Arial");
lizardText.setPosition(getWidth()/4 + 36, ARMHEIGHT + TEXTHEIGHT - 10);
lizardText.setColor(peach);
var lizardTextBack = new Text("Lizard!", "30pt Arial");
lizardTextBack.setPosition(getWidth()/4 - 1.5 + 36, ARMHEIGHT + TEXTHEIGHT - 8.5);



//these are the different frame by frame images that I used in order to create an animation

var firstArmFrameImage = new WebImage("https://codehs.com/uploads/31f44fd597c80a7b2bc7a599bf84f6f5");
firstArmFrameImage.setPosition(0, ARMHEIGHT);
firstArmFrameImage.setSize(400, 400);
var secondArmFrameImage = new WebImage("https://codehs.com/uploads/dec3e23ca9b41d1737082d5814001c6f");
secondArmFrameImage.setPosition(0, ARMHEIGHT);
secondArmFrameImage.setSize(400, 400);
var thirdArmFrameImage = new WebImage("https://codehs.com/uploads/ede77be8cd53c739eecaee058b3753e3");
thirdArmFrameImage.setPosition(0, ARMHEIGHT);
thirdArmFrameImage.setSize(400, 400);
var fourthArmFrameImage = new WebImage("https://codehs.com/uploads/d76599df50f4452d09cfb34dd557186e");
fourthArmFrameImage.setPosition(0, ARMHEIGHT);
fourthArmFrameImage.setSize(400, 400);
var fifthArmFrameImage = new WebImage("https://codehs.com/uploads/229f907740df71c1c244a08104e05a82");
fifthArmFrameImage.setPosition(0, ARMHEIGHT);
fifthArmFrameImage.setSize(400, 400);
var sixthArmFrameImage = new WebImage("https://codehs.com/uploads/2af0dc0cb5c4d32e0faff183ac9ada97");
sixthArmFrameImage.setPosition(0, ARMHEIGHT);
sixthArmFrameImage.setSize(400, 400);
var seventhArmFrameImage = new WebImage("https://codehs.com/uploads/606631eaba06114e3073627824d465df");
seventhArmFrameImage.setPosition(0, ARMHEIGHT);
seventhArmFrameImage.setSize(400, 400);
var eighthArmFrameImage = new WebImage("https://codehs.com/uploads/dec3e23ca9b41d1737082d5814001c6f");
eighthArmFrameImage.setPosition(0, ARMHEIGHT);
eighthArmFrameImage.setSize(400, 400);
var ninethArmFrameImage = new WebImage("https://codehs.com/uploads/31f44fd597c80a7b2bc7a599bf84f6f5");
ninethArmFrameImage.setPosition(0, ARMHEIGHT);
ninethArmFrameImage.setSize(400, 400);
var scissorsFrameHuman = new WebImage("https://codehs.com/uploads/b5ddbd5c2e22169b7abb0c1eb950d2b2");
scissorsFrameHuman.setPosition(0, ARMHEIGHT);
scissorsFrameHuman.setSize(400, 400);
var paperFrameHuman = new WebImage("https://codehs.com/uploads/84af654cbfa370b88c93e985a80496e9");
paperFrameHuman.setPosition(0, ARMHEIGHT);
paperFrameHuman.setSize(400, 400);
var spockFrameHuman = new WebImage("https://codehs.com/uploads/d8cdf3b8b37f527069ff83c47f0770ec");
spockFrameHuman.setPosition(0, ARMHEIGHT);
spockFrameHuman.setSize(400, 400);
var lizardFrameHuman = new WebImage("https://codehs.com/uploads/08fadff2eb46acd315e2094e6dd2a8d3");
lizardFrameHuman.setPosition(0, ARMHEIGHT);
lizardFrameHuman.setSize(400, 400);


//this text tells you whether you won lost or tied
var firstWinText = new Text("Yay you won", "25pt Arial");
firstWinText.setPosition(getWidth() - firstWinText.getX()/2, 40);
var secondWinText = new Text("Yay you won", "25pt Arial");
secondWinText.setPosition(getWidth() - secondWinText.getX()/2, 40);
var onlyDrawText = new Text("you drew", "22pt Arial");
onlyDrawText.setColor(Color.grey);
onlyDrawText.setPosition(getWidth() - onlyDrawText.getX()/2, 40);
var drawText = new Text("Draw", "25pt Arial");
drawText.setColor(Color.grey);
drawText.setPosition(155, 80);
var firstLossText = new Text("you lose", "25pt Arial");
firstLossText.setPosition(getWidth() - firstLossText.getX()/2, 40);
var secondLossText = new Text("you lose", "25pt Arial");
secondLossText.setPosition(getWidth() - secondLossText.getX()/2, 40);
var loseText = new Text("You lost", "25pt Arial");
loseText.setColor(Color.red);
loseText.setPosition(133, 80);
var winText = new Text("You won!", "25pt Arial");
winText.setColor(Color.green);
winText.setPosition(125, 80);


//these variables tell the animation for the computer where to be
var computerSize = 250;
var computerHeight = 400;
var computerLength = getWidth()/2 - 80;


//these are the frame by frame images used to create the computer's animation
var rockFrameComputer = new WebImage("https://codehs.com/uploads/9b7fb237a5c7bfddba5f768fe3077d38");
rockFrameComputer.setPosition(computerLength, ARMHEIGHT + computerHeight);
rockFrameComputer.setSize(computerSize, computerSize);
var scissorsFrameComputer = new WebImage("https://codehs.com/uploads/63084cb246626a0a848052aaf2a9a199");
scissorsFrameComputer.setPosition(computerLength, ARMHEIGHT + computerHeight);
scissorsFrameComputer.setSize(computerSize, computerSize);
var paperFrameComputer = new WebImage("https://codehs.com/uploads/ada1f095a4a3593b8136fe39ea5ced2a");
paperFrameComputer.setPosition(computerLength, ARMHEIGHT + computerHeight);
paperFrameComputer.setSize(computerSize, computerSize);
var spockFrameComputer = new WebImage("https://codehs.com/uploads/acb500e02d1851e0e56b13301b284c37");
spockFrameComputer.setPosition(computerLength, ARMHEIGHT + computerHeight);
spockFrameComputer.setSize(computerSize, computerSize);
var lizardFrameComputer = new WebImage("https://codehs.com/uploads/45e9d8893e56ac41b565aafba43306cc");
lizardFrameComputer.setPosition(computerLength, ARMHEIGHT + computerHeight);
lizardFrameComputer.setSize(computerSize, computerSize);
var billFrameComputer = new WebImage("https://codehs.com/uploads/cffed0e89d73b8c0e6afca71e252bff4");
billFrameComputer.setPosition(computerLength, ARMHEIGHT + computerHeight);
billFrameComputer.setSize(computerSize, computerSize);
var computerBlankFrame = new WebImage("https://codehs.com/uploads/68a061207a1a6c27d2b925cf636827a9");
computerBlankFrame.setPosition(computerLength, ARMHEIGHT + computerHeight);
computerBlankFrame.setSize(computerSize, computerSize);


//this is the text that tells the player what the computer played
//this text changes based upon a random variable that assignes the program to designated functions
var computerDecisionText = new Text("COMPUTER ERROR", "30pt Arial");
computerDecisionText.setColor(pink);
computerDecisionText.setPosition(250, 260);


//this is the circle that moves between -400 and -500 on the x-axis
//if the circle is at -400 it is easy mode, but if the circle is at -500 it is hard mode
//the buttons in the starting screen shift this circle back and forth
//I had to make these circles since you cannot publicly change a variable inside of a function, but you can call a method that changes the circles position
//the position can later be put into a private variable that the computer decision screen uses
var difficultyCircle = new Circle(5);
difficultyCircle.setPosition(-400, -400);
add(difficultyCircle);

//This is the speed variable that determines how fast the animations play
var PLAYSPEED = 40;

//this decides how many times the animation will put down it's fist
var armBangs = 0;

//by calling the rules page function I have started the game
rulesPage();

function rulesPage(){
    //rules image   
    add(rules);

    add(settingsTitle);
    
    //arrow image
    
    // add(arrow);
    
    //this text explains the winning condition
    
    add(bestOfText);
    
    //this is the code that detects when the player clicks a button
    
    mouseClickMethod(checkForButtons);
}


//this function uses parameters in order to store information on where the click occured
//it then puts it into a variable called e

function checkForButtons(e) {
    
    var color = Randomizer.nextColor();
    var circle = new Circle(0);
    
    //the variable e is then used to position an invisible circle
    circle.setPosition(e.getX(), e.getY());
    add(circle);
    
    //the position of this circle is stored in these variables so that they can be accessed by if statements
    var x = circle.getX();
    var y = circle.getY();
    
    //this if statement will only run if the click was within the button's clicking radius
    //this if statement brings the player to the actual gameplay
    
    if (x < 392 && x > 314 && y < 400 && y > 343){      
        //the x and y values (where the user clicked) are tested in this conditional statement to find out if the user clicked a button
    
        //this plays the click sound
        buttonClick.play();
        
        //this is the code executed to bring the player to the decision screen function
        decisionScreen();
        
        
    }
    
    //the same concept is used here so that the program can determine if the user clicked on the statistics button
    if (x < 90 && x > 20 && y < 398 && y > 347){
        //this is the code executed to take the player to the statistic screen function
        
        buttonClick.play();
        statisticScreen();
        
    }
    if (x < 395 && x > 315 && y < 210 && y > 158){
        
        //this is the code executed to change the difficulty to hard mode by moving the difficulty circle
        buttonClick.play();
        var difficulty = "hard";
        println("difficulty: " + difficulty);
        difficultyCircle.setPosition(-500, -500);
        add(difficultyCircle);
        var difficultyXAxis = difficultyCircle.getX();
        var difficultyYAxis = difficultyCircle.getY();
        
        //this changes where position of the arrow to show that hard mode is selected
        // arrow.setPosition(290, 170);
        // add(arrow);
        
    }
    if (x < 395 && x > 312 && y < 290 && y > 238){
        //this is the code executed to change the difficulty to easy mode by moving the difficulty circle
        buttonClick.play();
        var difficulty = "easy";
        println("difficulty: " + difficulty);
        difficultyCircle.setPosition(-400, -400);
        add(difficultyCircle);
        var difficultyXAxis = difficultyCircle.getX();
        var difficultyYAxis = difficultyCircle.getY();
        
        //this changes where position of the arrow to show that easy mode is selected
        // arrow.setPosition(290, 250);
        // add(arrow);
        
    }
}

function statisticScreen(){
    
    //these methods remove all of the images in the starting screen, and adds the correct image
    remove(rules);
    // remove(arrow);
    remove(settingsTitle);
    remove(bestOfText);
    add(statsImage);
    
    
    //this code is used in order to position the wins text if your wins go into the double digits or even triple digits!
    if (wins > 9){
        
        //this variable adjusts for any offset when your wins have a lot of digits
        winsAdjustingLength = 10;
    }
    if (wins > 99){
        winsAdjustingLength = 20;
    }
    if (wins > 999){
        winsAdjustingLength = 30;
    }
    if (wins > 9999){
        winsAdjustingLength = 40;
    }
    
    //this is what draws the wins that you have (It resets after you stop the program)
    gameWins = gameWinsCirc.getX();
    winsText.setText(gameWins);
    winsTextHighlight.setText(gameWins);
    
    //this creates a shadow behind the normal wins text
    add(winsTextHighlight);
    
    //this is where the wins text is actually created
    add(winsText);
    
    
    //this is what adjusts for double digit, triple digit etc. for the losses number
    if (losses > 9){
        
        //this is the variable that adjusts for a long loss amount
        lossesAdjustingLength = 10;
    }
    if (losses > 99){
        lossesAdjustingLength = 20;
    }
    if (losses > 999){
        lossesAdjustingLength = 30;
    }
    if (losses > 9999){
        lossesAdjustingLength = 40;
    }
    
    //this sets the amount of losses you have accumulated into text form
    lossesText.setText(gameLosses);
    lossesTextHighlight.setText(gameLosses);
    
    //this creates the shadow effect behind the number of losses
    add(lossesTextHighlight);
    
    //this creates the losses text
    add(lossesText);


    //this is what draws the matches played
    playedText.setText(played);
    playedTextHighlight.setText(played);
    
    //this does the same thing as the wins and losses text
    add(playedTextHighlight);
    add(playedText);
    
    //this adds the button to go back to the rules screen
    add(statBackButtonOutline1);
    add(statBackButtonOutline2);
    add(statBackButton);
    
    //this checks if the player clicks on the back button
    mouseClickMethod(checkForStatBackButton);
}

function checkForStatBackButton(f) {
    
    //this code is executed in order to bring the player from the stats screen to the settings screen
    
    var circle = new Circle(0);
    circle.setPosition(f.getX(), f.getY());
    add(circle);
    var x = circle.getX();
    var y = circle.getY();
    if (x < 266 && x > 121 && y < 469 && y > 411){
        //this is the code executed to bring the player back to the rules page by removing and adding the correct images
        //it also plays the song if it has been paused
        //the song is paused here whenever the player wins or loses, and the win or lose sound effect plays
        song.play();
        buttonClick.play();
        rulesPage();
        remove(statsImage);
        remove(winsTextHighlight);
        remove(winsText);
        remove(lossesTextHighlight);
        remove(lossesText);
        remove(playedTextHighlight);
        remove(playedText);
        remove(statBackButtonOutline1);
        remove(statBackButtonOutline2);
        remove(statBackButton);
    }
}

function decisionScreen(){
    //this is the function that is called when the player clicks play at the beginning screen
    
    //this removes and adds the correct images
    remove(rules);
    // remove(arrow);    
    remove(settingsTitle);
    remove(bestOfText);
    add(selectionImage);
    add(selectionsText);
    add(statBackButtonOutline1);
    add(statBackButtonOutline2);
    add(statBackButton);
    
    //this not only checks if the player wants to go back, but also which hand they have selected to play
    mouseClickMethod(checkForBackSelection);
}

function gameStartedDecisionScreen(){
    //this is the decision screen that is shown after a match has already started
    //a match technically starts when the player makes there first move
    //after that the player no longer has the option to go back, and thus this function is needed
    
    //the are used to remove and add any needed images
    //there is a lot to remove because there are a lot of possible outcomes of a selection, and each possible image may need to be removed here
    remove(scissorsFrameHuman);
    remove(scissorsTextBack);
    remove(scissorsText);
    remove(spockFrameHuman);
    remove(spockTextBack);
    remove(spockText);
    remove(lizardFrameHuman);
    remove(lizardTextBack);
    remove(lizardText);
    remove(rockTextBack);
    remove(rockText);
    remove(winText);
    remove(firstWinText);
    remove(secondWinText);
    remove(drawText);
    remove(onlyDrawText);
    remove(firstLossText);
    remove(loseText);
    remove(secondLossText);
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    remove(paperFrameHuman);
    remove(paperTextBack);
    remove(paperText);
    remove(statBackButtonOutline1);
    remove(statBackButtonOutline2);
    remove(statBackButton);
    remove(firstArmFrameImage);
    remove(secondArmFrameImage);
    remove(thirdArmFrameImage);
    remove(fourthArmFrameImage);
    remove(fifthArmFrameImage);
    remove(sixthArmFrameImage);
    remove(seventhArmFrameImage);
    remove(eighthArmFrameImage);
    remove(ninethArmFrameImage);
    remove(computerBlankFrame);
    remove(computerDecisionText);
    
    //these get the values of the match, and overall game statistics by getting the x values of there designated circles
    rounds = roundsCirc.getX();
    wins = winsCirc.getX();
    winsNumText.setText(wins);
    roundNumText.setText(rounds);
    losses = lossesCirc.getX();
    lossesNumText.setText(losses);
    
    //this is the code that will bring the player to the stat screen if the player has won a match
    if(wins > 4){
        //this tells the program to pause the game music, and start the win music
        song.pause();
        //this moves the designated win circle up one on the x-axis, so that the win variable can be accessed from the circle's position
        //I could not have used a variable since this is inside of a function, and there is no way of making a code HS function public
        gameWins = gameWinsCirc.getX();
        gameWinsCirc.setPosition(gameWins + 1, -100);
        
        //this resets the MATCH wins
        winsCirc.setPosition(0, -100);
        wins = winsCirc.getX();
        
        //this resets the MATCH losses
        lossesCirc.setPosition(0, -100);
        losses = lossesCirc.getX();
        
        //this resets the MATCH rounds
        roundsCirc.setPosition(1, -100);
        rounds = roundsCirc.getX();
        
        //this makes the matches played variable go up by one so that the statistics screen can access it
        playedCirc.setPosition(played + 1, -100);
        played = playedCirc.getX();
        
        //this takes the player to the statistics screen
        statisticScreen();
        winSound.play();
    }else if(losses > 4){
        //this tells the program to pause the game music, and start the lose music
        song.pause();
        lossSound.play();
        winsCirc.setPosition(0, -100);
        wins = winsCirc.getX();
        
        //this moves the designated losses circle up one on the x-axis, so that the losses variable can be accessed from the circle's position
        //I could not have used a variable since this is inside of a function, and there is no way of making a code HS function public
        gameLossesCirc.setPosition(gameLosses + 1, -100);
        gameLosses = gameLossesCirc.getX();
        
        //these lines of code reset the match statistics
        lossesCirc.setPosition(0, -100);
        roundsCirc.setPosition(1, -100);
        rounds = roundsCirc.getX();
        losses = lossesCirc.getX();
        playedCirc.setPosition(played + 1, -100);
        played = playedCirc.getX();
        
        //this takes the player to the statistics screen
        statisticScreen();
    }else{
        
        //this code is executed when the player does not have enough round wins or round losses
        //the code brings up the images that you see when you are selecting what to play during a match
        add(selectionImage);
        add(roundText);
        add(roundNumText);
        add(winsNumText);
        add(lossesNumText);
        add(compareText);
        
        //this function is used to check when a player makes a selection
        mouseClickMethod(checkForSelection);
    }
}

function checkForSelection(f){
    //this function is used to check when a player makes a selection
    
    //this circle is created where the mouse was during the click and stores it inside of the x and y variables
    var circle = new Circle(0);
    circle.setPosition(f.getX(), f.getY());
    add(circle);
    var x = circle.getX();
    var y = circle.getY();
    
    //this if statement is executed if the player clicks on lizard, and it executes functions that bring it to the human vs computer animation
    if (x < 176 && x > 37 && y < 373 && y > 273){
        computerRandomness.play();
        lizardSelection();
        
        //this removes the images from the selection screen
        remove(roundText);
        remove(roundNumText);
        remove(winsNumText);
        remove(lossesNumText);
        remove(compareText);
    }
    
    //this if statement is executed if the player clicks on rock, and it executes functions that bring it to the human vs computer animation
    else if (x < 344 && x > 244 && y < 372 && y > 272){
        computerRandomness.play();
        rockSelection();
        
        //this removes the images from the selection screen
        remove(roundText);
        remove(roundNumText);
        remove(winsNumText);
        remove(lossesNumText);
        remove(compareText);
    }
    
    //this if statement is executed if the player clicks on spock, and it executes functions that bring it to the human vs computer animation
    else if (x < 128 && x > 33 && y < 261 && y > 166){
        computerRandomness.play();
        spockSelection();
        
        //this removes the images from the selection screen
        remove(roundText);
        remove(roundNumText);
        remove(winsNumText);
        remove(lossesNumText);
        remove(compareText);
    }
    
    //this if statement is executed if the player clicks on scissors, and it executes functions that bring it to the human vs computer animation
    else if (x < 239 && x > 163 && y < 185 && y > 82){
        computerRandomness.play();
        scissorsSelection();
        
        //this removes the images from the selection screen
        remove(roundText);
        remove(roundNumText);
        remove(winsNumText);
        remove(lossesNumText);
        remove(compareText);
    }
    
    //this if statement is executed if the player clicks on paper, and it executes functions that bring it to the human vs computer animation
    else if (x < 365 && x > 283 && y < 258 && y > 155){
        computerRandomness.play();
        paperSelection();
        
        //this removes the images from the selection screen
        remove(roundText);
        remove(roundNumText);
        remove(winsNumText);
        remove(lossesNumText);
        remove(compareText);
    }
}




function checkForBackSelection(f){
    //this is the function that takes the player back to the starting screen if the player clicks the back button
    //the back button only appears in the first round, and before the match technically starts
    
    //this circle is used to tell the position of the mouse during the click and stores that information in the x and y variable
    var circle = new Circle(0);
    circle.setPosition(f.getX(), f.getY());
    add(circle);
    var x = circle.getX();
    var y = circle.getY();
    
    if (x < 266 && x > 121 && y < 469 && y > 411){
        //this is the code executed to bring the player back to the rules page
        buttonClick.play();
        rulesPage();
        
        //this code is executed to remove any images being used in the previous screen
        remove(selectionImage);
        remove(selectionsText);
        remove(statBackButtonOutline1);
        remove(statBackButtonOutline2);
        remove(statBackButton);

    }
    else if (x < 176 && x > 37 && y < 373 && y > 273){
        //this is the code that is executed if the player selects lizard
        //this initiates the round
        
        //this plays the computer animation
        computerRandomness.play();
        
        //this playes the human animation
        lizardSelection();
    }
    else if (x < 344 && x > 244 && y < 372 && y > 272){
        //this is the code that is executed if the player selects rock
        //this initiates the round
        
        //this plays the computer animation
        computerRandomness.play();
        
        //this playes the human animation
        rockSelection();

    }
    else if (x < 128 && x > 33 && y < 261 && y > 166){
        //this is the code that is executed if the player selects spock
        //this initiates the round
        
        //this plays the computer animation
        computerRandomness.play();
        
        //this playes the human animation
        spockSelection();

    }
    else if (x < 239 && x > 163 && y < 185 && y > 82){
        //this is the code that is executed if the player selects scissors
        //this initiates the round
        
        //this plays the computer animation
        computerRandomness.play();
        
        //this playes the human animation
        scissorsSelection();

    }
    else if (x < 365 && x > 283 && y < 258 && y > 155){
        //this is the code that is executed if the player selects paper
        //this initiates the round
        
        //this plays the computer animation
        computerRandomness.play();
        
        //this playes the human animation
        paperSelection();

    }
}

function lizardSelection(){
    //this is the function called whenever the player selects lizard
    
    //this prints what the human played into the console
    println("You chose lizard");
    
    //this removes all of the selection scene images
    remove(selectionImage);
    remove(selectionsText);
    remove(statBackButtonOutline1);
    remove(statBackButtonOutline2);
    remove(statBackButton);
    
    //the timers delay when the human animations are played
    
    //this plays the genaric "Rock, paper, scissors" arm bangs in order to prime the animation for a "Shoot!"
    setTimer(armAnimation, 10);
    //this is the animation that plays the "Shoot!" and it plays what the human selected
    setTimer(lizardAnimationHuman, 10);
    
    //this animation plays a random set of computer selections for the computer animation
    computerAnimation();
    //this plays the final random selection which becomes what the computer plays
    setTimer(computerLizardAnimation, PLAYSPEED * 28);
    
}

function rockSelection(){
    //this is the function called whenever the player selects rock
    
    //this prints what the human played into the console
    println("You chose rock");
    
    //this removes all of the selection scene images
    remove(selectionImage);
    remove(selectionsText);
    remove(statBackButtonOutline1);
    remove(statBackButtonOutline2);
    remove(statBackButton);
    
    //the timers delay when the human animations are played
    
    //this plays the genaric "Rock, paper, scissors" arm bangs in order to prime the animation for a "Shoot!"
    setTimer(armAnimation, 10);
    //this is the animation that plays the "Shoot!" and it plays what the human selected
    setTimer(rockAnimationHuman, 10);
    
    //this plays the computer animation and it's random selection
    computerAnimation();
    setTimer(computerRockAnimation, PLAYSPEED * 28);
}

function spockSelection(){
    //this is the function called whenever the player selects spock
    
    //this prints what the human played into the console
    println("You chose spock");
    
    //this removes all of the selection scene images
    remove(selectionImage);
    remove(selectionsText);
    remove(statBackButtonOutline1);
    remove(statBackButtonOutline2);
    remove(statBackButton);
    
    //the timers delay when the human animations are played
    
    //this plays the genaric "Rock, paper, scissors" arm bangs in order to prime the animation for a "Shoot!"
    setTimer(armAnimation, 10);
    //this is the animation that plays the "Shoot!" and it plays what the human selected
    setTimer(spockAnimationHuman, 10);
    
    //this plays the computer animation and it's random selection
    computerAnimation();
    setTimer(computerSpockAnimation, PLAYSPEED * 28);
}

function scissorsSelection(){
    //this is the function called whenever the player selects scissors
    
    //this prints what the human played into the console
    println("You chose scissors");
    
    //this removes all of the selection scene images
    remove(selectionImage);
    remove(selectionsText);
    remove(statBackButtonOutline1);
    remove(statBackButtonOutline2);
    remove(statBackButton);
    
    //the timers delay when the human animations are played
    
    //this plays the genaric "Rock, paper, scissors" arm bangs in order to prime the animation for a "Shoot!"
    setTimer(armAnimation, 10);
    //this is the animation that plays the "Shoot!" and it plays what the human selected
    setTimer(scissorsAnimationHuman, 10);
    
    //this plays the computer animation and it's random selection
    computerAnimation();
    setTimer(computerScissorsAnimation, PLAYSPEED * 28);
    
}

function paperSelection(){
    //this is the function called whenever the player selects paper
    
    //this prints what the human played into the console
    println("You chose paper");
    
    //this removes all of the selection scene images
    remove(selectionImage);
    remove(selectionsText);
    remove(statBackButtonOutline1);
    remove(statBackButtonOutline2);
    remove(statBackButton);
    
    //the timers delay when the human animations are played
    
    //this plays the genaric "Rock, paper, scissors" arm bangs in order to prime the animation for a "Shoot!"
    setTimer(armAnimation, 10);
    //this is the animation that plays the "Shoot!" and it plays what the human selected
    setTimer(paperAnimationHuman, 10);
    
    //this plays the computer animation and it's random selection
    computerAnimation();
    setTimer(computerPaperAnimation, PLAYSPEED * 28);
    
}



function computerAnimation(){
    //this is the function that plays the random set of computer frames in the beginning of the animation
    add(computerBlankFrame);
    
    //this is the variable that randomizes what frames will be played in the beginning
    var computerAnimationRandomness1 = Randomizer.nextInt(0, 6);
    
    //these if statements play randomly assigned frames, and there are timers used to delay correctly
    //with this delay a some what realistic animation plays
    
    //these are all of the possible first random frames
    if (computerAnimationRandomness1 == 1){
        setTimer(firstComputerFrame1, 0);
    }
    if (computerAnimationRandomness1 == 2){
        setTimer(firstComputerFrame2, 0);
    }    
    if (computerAnimationRandomness1 == 3){
        setTimer(firstComputerFrame3, 0);
    }    
    if (computerAnimationRandomness1 == 4){
        setTimer(firstComputerFrame4, 0);
    }    
    if (computerAnimationRandomness1 == 5){
        setTimer(firstComputerFrame5, 0);
    }
    
    //these are all of the possible second random frames
    var computerAnimationRandomness2 = computerAnimationRandomness1 + 1;
    if (computerAnimationRandomness2 > 5){
        computerAnimationRandomness2 = 1;
    }
    if (computerAnimationRandomness2 == 1){
        setTimer(secondComputerFrame1, 10 + PLAYSPEED * 9);
    }
    if (computerAnimationRandomness2 == 2){
        setTimer(secondComputerFrame2, 10 + PLAYSPEED * 9);
    }    
    if (computerAnimationRandomness2 == 3){
        setTimer(secondComputerFrame3, 10 + PLAYSPEED * 9);
    }    
    if (computerAnimationRandomness2 == 4){
        setTimer(secondComputerFrame4, 10 + PLAYSPEED * 9);
    }    
    if (computerAnimationRandomness2 == 5){
        setTimer(secondComputerFrame5, 10 + PLAYSPEED * 9);
    }

    //these are all of the possible third random frames
    var computerAnimationRandomness3 = computerAnimationRandomness2 + 1;
    if (computerAnimationRandomness3 > 5){
        computerAnimationRandomness3 = 1;
    }
    if (computerAnimationRandomness3 == 1){
        setTimer(thirdComputerFrame1, 10 + PLAYSPEED * 17);
    }
    if (computerAnimationRandomness3 == 2){
        setTimer(thirdComputerFrame2, 10 + PLAYSPEED * 17);
    }    
    if (computerAnimationRandomness3 == 3){
        setTimer(thirdComputerFrame3, 10 + PLAYSPEED * 17);
    }    
    if (computerAnimationRandomness3 == 4){
        setTimer(thirdComputerFrame4, 10 + PLAYSPEED * 17);
    }    
    if (computerAnimationRandomness3 == 5){
        setTimer(thirdComputerFrame5, 10 + PLAYSPEED * 17);
    }
    
    //just before the computer's final decision I put in a brief frame that shows bill cipher from gravity falls
    setTimer(fourthComputerFrame,PLAYSPEED * 24);
}
//these are the functions that are called in the different timers

//these functions specifically are the different possibilities for the first frame
function firstComputerFrame1(){
    remove(computerBlankFrame);
    add(rockFrameComputer);
    stopTimer(firstComputerFrame1);
}
function firstComputerFrame2(){
    remove(computerBlankFrame);
    add(paperFrameComputer);
    stopTimer(firstComputerFrame2);
}
function firstComputerFrame3(){
    remove(computerBlankFrame);
    add(scissorsFrameComputer);
    stopTimer(firstComputerFrame3);
}
function firstComputerFrame4(){
    remove(computerBlankFrame);
    add(lizardFrameComputer);
    stopTimer(firstComputerFrame4);
}
function firstComputerFrame5(){
    remove(computerBlankFrame);
    add(spockFrameComputer);
    stopTimer(firstComputerFrame5);
}

//these functions specifically are the different possibilities for the second frame
function secondComputerFrame1(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(rockFrameComputer);
    stopTimer(secondComputerFrame1);
}
function secondComputerFrame2(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(paperFrameComputer);
    stopTimer(secondComputerFrame2);
}
function secondComputerFrame3(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(scissorsFrameComputer);
    stopTimer(secondComputerFrame3);
}
function secondComputerFrame4(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(lizardFrameComputer);
    stopTimer(secondComputerFrame4);
}
function secondComputerFrame5(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(spockFrameComputer);
    stopTimer(secondComputerFrame5);
}

//these functions specifically are the different possibilities for the third frame
function thirdComputerFrame1(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(rockFrameComputer);
    stopTimer(thirdComputerFrame1);
}
function thirdComputerFrame2(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(paperFrameComputer);
    stopTimer(thirdComputerFrame2);
}
function thirdComputerFrame3(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(scissorsFrameComputer);
    stopTimer(thirdComputerFrame3);
}
function thirdComputerFrame4(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(lizardFrameComputer);
    stopTimer(thirdComputerFrame4);
}
function thirdComputerFrame5(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(spockFrameComputer);
    stopTimer(thirdComputerFrame5);
}

//this is the fourth frame function that shows bill cipher from gravity falls
function fourthComputerFrame(){
    remove(rockFrameComputer);
    remove(paperFrameComputer);
    remove(scissorsFrameComputer);
    remove(lizardFrameComputer);
    remove(spockFrameComputer);
    
    add(billFrameComputer);
    stopTimer(fourthComputerFrame);
    
}

//this is the function that is declared if the human selects lizard
function computerLizardAnimation(){
    
    //these are used to get game information about the match so far
    losses = lossesCirc.getX();
    wins = winsCirc.getX();
    remove(billFrameComputer);
    
    //this randomly decides the computer's move
    var selectionRandomnessEasy = Randomizer.nextInt(1, 5);
    
    //this code is run if the player has selected hard difficulty
    var difficultyDetector = difficultyCircle.getX();
    if (difficultyDetector == -500){
        //These are the if statements that decide what the computer will play, and how it affects the match
        if (selectionRandomnessEasy == 2){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            lossesCirc.setPosition(losses + 1, -100);
            thirdExplaination.play();
            secondLossText.setText("rock crushes lizard");
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 1){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            winsCirc.setPosition(wins + 1, -100);
            fourthExplaination.play();
            firstWinText.setText("lizard poisons spock");
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            winsCirc.setPosition(wins + 1, -100);
            seventhExplaination.play();
            secondWinText.setText("lizard eats paper");
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            add(computerDecisionText);
            lossesCirc.setPosition(losses + 1, -100);
            sixthExplaination.play();
            firstLossText.setText("scissors decapitates lizard");
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            tieExplaination.play();
            onlyDrawText.setText("lizard does nothing to lizard");
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
    }
    
    //the easy component is what seperates hard mode from easy mode
    //it does this by giving a greater chance for the player to win on easy mode
    var easyComponent = Randomizer.nextInt(1, 6);
    
    //this code is run if the player has selected easy difficulty
    if (difficultyDetector == -400){
        //these are the if statements that make it easier for the player to win on easy mode
        if (easyComponent == 1){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            winsCirc.setPosition(wins + 1, -100);
            
            fourthExplaination.play();
            firstWinText.setText("lizard poisons spock");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (easyComponent == 2){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            winsCirc.setPosition(wins + 1, -100);
            
            seventhExplaination.play();
            secondWinText.setText("lizard eats paper");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        
        //these are the if statements that are run if the easy component does not already give the player a win
        else if (selectionRandomnessEasy == 2){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            lossesCirc.setPosition(losses + 1, -100);
            
            thirdExplaination.play();
            secondLossText.setText("rock crushes lizard");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 1){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            
            fourthExplaination.play();
            firstWinText.setText("lizard poisons spock");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            winsCirc.setPosition(wins + 1, -100);
            
            seventhExplaination.play();
            secondWinText.setText("lizard eats paper");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            
            add(computerDecisionText);
            lossesCirc.setPosition(losses + 1, -100);
            
            sixthExplaination.play();
            firstLossText.setText("scissors decapitates lizard");
            
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            
            tieExplaination.play();
            onlyDrawText.setText("lizard does nothing to lizard");
        
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
    }

    matchBack();
    stopTimer(computerLizardAnimation);
}

//this is the function that is declared if the human selects spock
function computerSpockAnimation(){
    
    //these are used to get game information about the match so far
    losses = lossesCirc.getX();
    wins = winsCirc.getX();
    remove(billFrameComputer);
    
    //this randomly decides the computer's move
    var selectionRandomnessEasy = Randomizer.nextInt(1, 5);
    
    //this code is run if the player has selected hard difficulty
    var difficultyDetector = difficultyCircle.getX();
    if (difficultyDetector == -500){
        //These are the if statements that decide what the computer will play, and how it affects the match
        if (selectionRandomnessEasy == 2){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            lossesCirc.setPosition(losses + 1, -100);
            
            eighthExplaination.play();
            secondLossText.setText("paper disproves spock");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            
            ninethExplaination.play();
            firstWinText.setText("spock vaporizes rock");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            winsCirc.setPosition(wins + 1, -100);
            
            fifthExplaination.play();
            secondWinText.setText("spock smashes scissors");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            
            add(computerDecisionText);
            lossesCirc.setPosition(losses + 1, -100);
            
            fourthExplaination.play();
            firstLossText.setText("lizard poisons spock");
            
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            
            tieExplaination.play();
            onlyDrawText.setText("spock does nothing to spock");
        
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
    }
    
    //the easy component is what seperates hard mode from easy mode
    //it does this by giving a greater chance for the player to win on easy mode
    var easyComponent = Randomizer.nextInt(1, 6);
    
    //this code is run if the player has selected easy difficulty
    if (difficultyDetector == -400){
        //these are the if statements that make it easier for the player to win on easy mode
        if (easyComponent == 1){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            winsCirc.setPosition(wins + 1, -100);
            
            fifthExplaination.play();
            firstWinText.setText("spock smashes scissors");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (easyComponent == 2){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            winsCirc.setPosition(wins + 1, -100);
            
            ninethExplaination.play();
            secondWinText.setText("spock vaporizes rock");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        
        //these are the if statements that are run if the easy component does not already give the player a win
        
        else if (selectionRandomnessEasy == 2){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            lossesCirc.setPosition(losses + 1, -100);
            
            eighthExplaination.play();
            secondLossText.setText("paper disproves spock");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            
            ninethExplaination.play();
            firstWinText.setText("spock vaporizes rock");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            winsCirc.setPosition(wins + 1, -100);
            
            fifthExplaination.play();
            secondWinText.setText("spock smashes scissors");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            
            add(computerDecisionText);
            lossesCirc.setPosition(losses + 1, -100);
            
            fourthExplaination.play();
            firstLossText.setText("lizard poisons spock");
            
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            
            tieExplaination.play();
            onlyDrawText.setText("spock does nothing to spock");
        
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
    }

    matchBack();
    stopTimer(computerSpockAnimation);
}

//this is the function that is declared if the human selects rock
function computerRockAnimation(){
    
    //these are used to get game information about the match so far
    losses = lossesCirc.getX();
    wins = winsCirc.getX();
    remove(billFrameComputer);
    
    //this randomly decides the computer's move
    var selectionRandomnessEasy = Randomizer.nextInt(1, 5);
    
    //this code is run if the player has selected hard difficulty
    var difficultyDetector = difficultyCircle.getX();
    if (difficultyDetector == -500){
        //These are the if statements that decide what the computer will play, and how it affects the match
        if (selectionRandomnessEasy == 2){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            lossesCirc.setPosition(losses + 1, -100);
            
            secondExplaination.play();
            secondLossText.setText("paper covers rock");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            
            tieExplaination.play();
            onlyDrawText.setText("rock does nothing to rock");
        
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            winsCirc.setPosition(wins + 1, -100);
            
            tenthExplaination.play();
            firstWinText.setText("rock crushes scissors");
            
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            winsCirc.setPosition(wins + 1, -100);
            
            thirdExplaination.play();
            secondWinText.setText("rock crushes lizard");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            lossesCirc.setPosition(losses + 1, -100);
            
            ninethExplaination.play();
            firstLossText.setText("spock vaporizes rock");
        
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
    }
    
    //the easy component is what seperates hard mode from easy mode
    //it does this by giving a greater chance for the player to win on easy mode
    var easyComponent = Randomizer.nextInt(1, 6);
    
    //this code is run if the player has selected easy difficulty
    if (difficultyDetector == -400){
        //these are the if statements that make it easier for the player to win on easy mode
        if (easyComponent == 1){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            winsCirc.setPosition(wins + 1, -100);
            
            tenthExplaination.play();
            firstWinText.setText("rock crushes scissors");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (easyComponent == 2){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            winsCirc.setPosition(wins + 1, -100);
            
            thirdExplaination.play();
            secondWinText.setText("rock crushes lizard");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        
        //these are the if statements that are run if the easy component does not already give the player a win
        
        else if (selectionRandomnessEasy == 2){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            lossesCirc.setPosition(losses + 1, -100);
            
            secondExplaination.play();
            secondLossText.setText("paper covers rock");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            
            tieExplaination.play();
            onlyDrawText.setText("rock does nothing to rock");
        
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            winsCirc.setPosition(wins + 1, -100);
            
            tenthExplaination.play();
            firstWinText.setText("rock crushes scissors");
            
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            winsCirc.setPosition(wins + 1, -100);
            
            thirdExplaination.play();
            secondWinText.setText("rock crushes lizard");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            lossesCirc.setPosition(losses + 1, -100);
            
            ninethExplaination.play();
            firstLossText.setText("spock vaporizes rock");
        
            setTimer(firstLossTextExecute, PLAYSPEED);
        }    
    }

    matchBack();
    stopTimer(computerRockAnimation);
}

//this is the function that is declared if the human selects scissors
function computerScissorsAnimation(){
    
    //these are used to get game information about the match so far
    losses = lossesCirc.getX();
    wins = winsCirc.getX();
    remove(billFrameComputer);
    
    //this randomly decides the computer's move
    var selectionRandomnessEasy = Randomizer.nextInt(1, 5);
    
    //this code is run if the player has selected hard difficulty
    var difficultyDetector = difficultyCircle.getX();
    if (difficultyDetector == -500){
        //These are the if statements that decide what the computer will play, and how it affects the match
        if (easyComponent == 1){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            winsCirc.setPosition(wins + 1, -100);
            
            firstExplaination.play();
            firstWinText.setText("scissors cuts paper");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (easyComponent == 2){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            winsCirc.setPosition(wins + 1, -100);
            
            sixthExplaination.play();
            secondWinText.setText("scissors decapitates lizard");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        
        //these are the if statements that are run if the easy component does not already give the player a win
        
        else if (selectionRandomnessEasy == 2){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            winsCirc.setPosition(wins + 1, -100);
            
            firstExplaination.play();
            firstWinText.setText("scissors cuts paper");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            lossesCirc.setPosition(losses + 1, -100);
            
            tenthExplaination.play();
            secondLossText.setText("rock crushes scissors");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            
            tieExplaination.play();
            onlyDrawText.setText("scissors do nothing to scissors");
            
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            winsCirc.setPosition(wins + 1, -100);
            
            sixthExplaination.play();
            secondWinText.setText("scissors decapitates lizard");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            lossesCirc.setPosition(losses + 1, -100);
            
            fifthExplaination.play();
            firstLossText.setText("spock smashes scissors");
        
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
    }
    
    //the easy component is what seperates hard mode from easy mode
    //it does this by giving a greater chance for the player to win on easy mode
    var easyComponent = Randomizer.nextInt(1, 6);
    
    //this code is run if the player has selected easy difficulty
    if (difficultyDetector == -400){
        //these are the if statements that make it easier for the player to win on easy mode
        if (easyComponent == 1){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            winsCirc.setPosition(wins + 1, -100);
            
            firstExplaination.play();
            firstWinText.setText("scissors cuts paper");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (easyComponent == 2){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            winsCirc.setPosition(wins + 1, -100);
            
            sixthExplaination.play();
            secondWinText.setText("scissors decapitates lizard");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        
        
        else if (selectionRandomnessEasy == 2){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            winsCirc.setPosition(wins + 1, -100);
            
            firstExplaination.play();
            firstWinText.setText("scissors cuts paper");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            lossesCirc.setPosition(losses + 1, -100);
            
            tenthExplaination.play();
            secondLossText.setText("rock crushes scissors");
            secondLossText.setColor(Color.red);
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            
            tieExplaination.play();
            onlyDrawText.setText("scissors do nothing to scissors");
            
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            winsCirc.setPosition(wins + 1, -100);
            
            sixthExplaination.play();
            secondWinText.setText("scissors decapitates lizard");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            lossesCirc.setPosition(losses + 1, -100);
            
            fifthExplaination.play();
            firstLossText.setText("spock smashes scissors");
        
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
        
    }

    matchBack();
    stopTimer(computerScissorsAnimation);
}

//this is the function that is declared if the human selects paper
function computerPaperAnimation(){
    
    //these are used to get game information about the match so far
    losses = lossesCirc.getX();
    wins = winsCirc.getX();
    remove(billFrameComputer);
    
    //this randomly decides the computer's move
    var selectionRandomnessEasy = Randomizer.nextInt(1, 5);
    
    //this code is run if the player has selected hard difficulty
    var difficultyDetector = difficultyCircle.getX();
    if (difficultyDetector == -500){
        //These are the if statements that decide what the computer will play, and how it affects the match
        if (selectionRandomnessEasy == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            winsCirc.setPosition(wins + 1, -100);
            
            secondExplaination.play();
            firstWinText.setText("paper covers rock");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 2){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            winsCirc.setPosition(wins + 1, -100);
            
            eighthExplaination.play();
            secondWinText.setText("paper disproves spock");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            
            tieExplaination.play();
            onlyDrawText.setText("paper does nothing to paper");
            
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            lossesCirc.setPosition(losses + 1, -100);
            
            seventhExplaination.play();
            firstLossText.setText("lizard eats paper");
            
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            lossesCirc.setPosition(losses + 1, -100);
            
            firstExplaination.play();
            secondLossText.setText("scissors cuts paper");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
    }
    
    //the easy component is what seperates hard mode from easy mode
    //it does this by giving a greater chance for the player to win on easy mode
    var easyComponent = Randomizer.nextInt(1, 6);
    
    //this code is run if the player has selected easy difficulty
    if (difficultyDetector == -400){
        //these are the if statements that make it easier for the player to win on easy mode
        if (easyComponent == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            winsCirc.setPosition(wins + 1, -100);
            
            secondExplaination.play();
            firstWinText.setText("paper covers rock");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (easyComponent == 2){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            winsCirc.setPosition(wins + 1, -100);
            
            eighthExplaination.play();
            secondWinText.setText("paper disproves spock");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        
        //these are the if statements that are run if the easy component does not already give the player a win
        
        else if (selectionRandomnessEasy == 1){
            add(rockFrameComputer);
            computerDecisionText.setText("Rock!");
            winsCirc.setPosition(wins + 1, -100);
            
            secondExplaination.play();
            firstWinText.setText("paper covers rock");
        
            setTimer(firstWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 2){
            add(spockFrameComputer);
            computerDecisionText.setText("Spock!");
            winsCirc.setPosition(wins + 1, -100);
            
            eighthExplaination.play();
            secondWinText.setText("paper disproves spock");
            
            setTimer(secondWinTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 3){
            add(paperFrameComputer);
            computerDecisionText.setText("Paper!");
            
            tieExplaination.play();
            onlyDrawText.setText("paper does nothing to paper");
            
            setTimer(onlyDrawTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 4){
            add(lizardFrameComputer);
            computerDecisionText.setText("Lizard!");
            lossesCirc.setPosition(losses + 1, -100);
            
            seventhExplaination.play();
            firstLossText.setText("lizard eats paper");
            
            setTimer(firstLossTextExecute, PLAYSPEED);
        }
        else if (selectionRandomnessEasy == 5){
            add(scissorsFrameComputer);
            computerDecisionText.setText("Scissors!");
            lossesCirc.setPosition(losses + 1, -100);
            
            firstExplaination.play();
            secondLossText.setText("scissors cuts paper");
        
            setTimer(secondLossTextExecute, PLAYSPEED);
        }
        
    }

    matchBack();
    stopTimer(computerPaperAnimation);

}

//this function is called at the end of every win lose or draw animation
function matchBack(){
    add(statBackButtonOutline1);
    add(statBackButtonOutline2);
    add(statBackButton);
    //this calls a function that goes back to the appropriate screen after a win, lose, or tie
    mouseClickMethod(checkForMatchBack);
}


//this is the function that contains text that is displayed when the player wins
function firstWinTextExecute(){
    var sideProportion = firstWinText.getX();
    firstWinText.setColor(Color.green);
    firstWinText.setPosition(0, 40);
    add(firstWinText);
    add(winText);
    add(computerDecisionText);
    stopTimer(firstWinTextExecute);
}

//this is the function that contains a different type of win text that is displayed when the player wins
function secondWinTextExecute(){
    var sideProportion = secondWinText.getX();
    secondWinText.setColor(Color.green);
    secondWinText.setPosition(0, 40);
    add(secondWinText);
    add(winText);
    add(computerDecisionText);
    stopTimer(secondWinTextExecute);
}

//this is the function that contains text that is displayed when the player draws
function onlyDrawTextExecute(){
    var sideProportion = onlyDrawText.getX();
    onlyDrawText.setPosition(0, 40);
    add(onlyDrawText);
    add(drawText);
    add(computerDecisionText);
    stopTimer(onlyDrawTextExecute);
}

//this is the function that contains text that is displayed when the player loses
function firstLossTextExecute(){
    var sideProportion = firstLossText.getX();
    firstLossText.setColor(Color.red);
    firstLossText.setPosition(0, 40);
    add(firstLossText);
    add(loseText);
    add(computerDecisionText);
    stopTimer(firstLossTextExecute);
}

//this is the function that contains a different type of text that is displayed when the player loses
function secondLossTextExecute(){
    var sideProportion = secondLossText.getX();
    secondLossText.setColor(Color.red);
    secondLossText.setPosition(0, 40);
    add(secondLossText);
    add(loseText);
    add(computerDecisionText);
    stopTimer(secondLossTextExecute);
}

//this function is called whenever the player clicks inside of the win, lose, or tie animation
function checkForMatchBack(g){
    //this calcuates where the player clicked and stores that info in x and y variables
    var circle = new Circle(0);
    circle.setPosition(g.getX(), g.getY());
    add(circle);
    var x = circle.getX();
    var y = circle.getY();
    
    //this detects if the click was within the boundarys of the back button
    if (x < 266 && x > 121 && y < 469 && y > 411){
        //this plays the button sound effect
        buttonClick.play();
        
        //this is the code executed to bring the player back to the rules page
        //it also increases the amount of rounds
        roundsCirc.setPosition(rounds + 1, -100);
        rounds = roundsCirc.getX();
        println("Round " + rounds + " begin!");
        gameStartedDecisionScreen();
    }
}

//this is the begining human animation
//it is the "Rock, Paper, Scissors" in "Rock, Paper, Scissors Shoot!"
function armAnimation(){
    
    //there are different timers on the funtions in order to properly delay the individual frames of the animation
    //this makes it possible to create a smooth animation
    setTimer(firstArmFrame, 1);
            
    setTimer(secondArmFrame, PLAYSPEED);
            
    setTimer(thirdArmFrame, PLAYSPEED * 2);
            
    setTimer(fourthArmFrame, PLAYSPEED * 3);
            
    setTimer(fifthArmFrame, PLAYSPEED * 4);
            
    setTimer(sixthArmFrame, PLAYSPEED * 5);
            
    setTimer(seventhArmFrame, PLAYSPEED * 6);
            
    setTimer(eighthArmFrame, PLAYSPEED * 7);
            
    setTimer(ninethArmFrame, PLAYSPEED * 8);
    
    //you will see this at the end of every timer
    //this makes it so that the timer doesn't repeat what it needs to do over and over again
    stopTimer(armAnimation);
}

//the following functions are called in the function above
//they are the individual images of the "Rock, Paper, Scissors" animation
function firstArmFrame(){
    add(firstArmFrameImage);
    remove(ninethArmFrameImage);
    stopTimer(firstArmFrame);
}
function secondArmFrame(){
    remove(firstArmFrameImage);
    add(secondArmFrameImage);
    stopTimer(secondArmFrame);
}
function thirdArmFrame(){
    remove(secondArmFrameImage);
    add(thirdArmFrameImage);
    stopTimer(thirdArmFrame);
}
function fourthArmFrame(){
    remove(thirdArmFrameImage);
    add(fourthArmFrameImage);
    stopTimer(fourthArmFrame);
}
function fifthArmFrame(){
    remove(fourthArmFrameImage);
    add(fifthArmFrameImage);
    stopTimer(fifthArmFrame);
}
function sixthArmFrame(){
    remove(fifthArmFrameImage);
    add(sixthArmFrameImage);
    stopTimer(sixthArmFrame);
}
function seventhArmFrame(){
    remove(sixthArmFrameImage);
    add(seventhArmFrameImage);
    stopTimer(seventhArmFrame);
}
function eighthArmFrame(){
    remove(seventhArmFrameImage);
    add(eighthArmFrameImage);
    stopTimer(eighthArmFrame);
}
function ninethArmFrame(){
    remove(eighthArmFrameImage);
    add(ninethArmFrameImage);
    stopTimer(ninethArmFrame);
    armBangs = armBangs + 1;
    
    //these if statements tell the program how many times the human should bang their arm as well as when to reset the arm bang variable
    if (armBangs < 3){
        armAnimation();
    }
    if (armBangs > 2){
        armBangs = 0;
    }
}

//this function calls functions that display the first couple of frames of "Shoot!" in "r, p, s, Shoot!"
//it uses timers in order to delay certain frames to make an animation
function preThrow(){
    setTimer(firstFrameThrow, PLAYSPEED * 25);
            
    setTimer(secondFrameThrow, PLAYSPEED * 26);
            
    setTimer(thirdFrameThrow, PLAYSPEED * 27);
    
}

//these are the functions that contain the images needed in the function above
function firstFrameThrow(){
    remove(ninethArmFrameImage);
    add(secondArmFrameImage);
    stopTimer(firstFrameThrow);    
}
function secondFrameThrow(){
    remove(secondArmFrameImage);
    add(thirdArmFrameImage);
    stopTimer(secondFrameThrow);    
}
function thirdFrameThrow(){
    remove(thirdArmFrameImage);
    add(fourthArmFrameImage);
    stopTimer(thirdFrameThrow);    
}

//these functions that direct which images are supposed to be called depending on what the player selected
function rockAnimationHuman(){
    //each of these functions calls the preThrow function which does the first frames of throw that 
    //the preThrow is not different depending on what the human selected, and was more concisely written by using a seperate function
    preThrow();
    var humanPlayed = 1;
    playRockFrameHuman();
    stopTimer(rockAnimationHuman);
}
function scissorsAnimationHuman(){
    preThrow();
    var humanPlayed = 2;
    playScissorsFrameHuman();
    stopTimer(scissorsAnimationHuman);
}
function paperAnimationHuman(){
    preThrow();
    var humanPlayed = 3;
    playPaperFrameHuman();
    stopTimer(paperAnimationHuman);
}
function spockAnimationHuman(){
    preThrow();
    var humanPlayed = 4;
    playSpockFrameHuman();
    stopTimer(spockAnimationHuman);
}
function lizardAnimationHuman(){
    preThrow();
    playLizardFrameHuman();
    stopTimer(lizardAnimationHuman);
}

//these are the different functions that are called depending on what the player selected
//this is the final hand position of the "Shoot!" in "rock, paper, scissors, Shoot!"
//there are pairs of play frame, and frame creator in order to have a timer
//timers allow for a delay when calling a function, and are perfect for animating frame by frame

//this has the human play rock
function playRockFrameHuman(){
    setTimer(rockFrameCreator, PLAYSPEED * 28);
}
function rockFrameCreator(){
    add(fifthArmFrameImage);
    add(rockTextBack);
    add(rockText);
    stopTimer(rockFrameCreator);
}

//this has the human play scissors
function playScissorsFrameHuman(){
    setTimer(scissorsFrameCreator, PLAYSPEED * 28);
}
function scissorsFrameCreator(){
    add(scissorsFrameHuman);
    add(scissorsTextBack);
    add(scissorsText);
    stopTimer(scissorsFrameCreator);
}

//this has the human play paper
function playPaperFrameHuman(){
    setTimer(paperFrameCreator, PLAYSPEED * 28);
}
function paperFrameCreator(){
    add(paperFrameHuman);
    add(paperTextBack);
    add(paperText);
    stopTimer(paperFrameCreator);
}

//this has the human play spock
function playSpockFrameHuman(){
    setTimer(spockFrameCreator, PLAYSPEED * 28);
}
function spockFrameCreator(){
    add(spockFrameHuman);
    add(spockTextBack);
    add(spockText);
    stopTimer(spockFrameCreator);
}

//this has the human play lizard
function playLizardFrameHuman(){
    setTimer(lizardFrameCreator, PLAYSPEED * 28);
}
function lizardFrameCreator(){
    add(lizardFrameHuman);
    add(lizardTextBack);
    add(lizardText);
    stopTimer(lizardFrameCreator);
}

//if you actually made it this far, you are a code compiler and not actually a person
