// Variables are initialized and the image of the map is displayed
var map = new WebImage("https://codehs.com/uploads/69c7dfc898a5d183df655a313e2b1f36");
map.setSize(400, 510);
add(map);

var Marker = new WebImage("https://codehs.com/uploads/9e8c140e005859f66889846fa0b38654");
Marker.setSize(50, 50);

var CaspianSeaArrow = new WebImage("https://codehs.com/uploads/ece9687534def265a07ed8ea16fee18a");
CaspianSeaArrow.setSize(70,40);
CaspianSeaArrow.setPosition(328, 398);

var questionWait = 2000;
var chosenFeature = Randomizer.nextInt(1,38);
var COUNT = 39;
var CorrectPlace;
var type;

askQuestion();

// This function prompts the user for the answer and determines if they are correct
function getAnswer() {
    // A timer is used to give time for the user to look at the marker on the map before asking
    stopTimer(getAnswer);
    
    // Prompts user with the hint of what type of feature it is
    var answer = readLine("What is this " + type + "'s name: ");
    
    // Once the player correctly spells the feature, the next question is asked
    if(answer == CorrectPlace) {
        println("Correct!");
        if(chosenFeature == 38) {
            chosenFeature = 1;
        } else{
            chosenFeature++;
        }
        askQuestion();
    } 
    // The user must answer the question correctly before moving on to the next question
    else {
        println("FALSE");
        println("Your answer: " + answer);
        println("Correct answer: " + CorrectPlace);
        askQuestion();
    }
}

// Depending on the randomly seleceted number for "chosenFeature", different
// marker locations and names for what is correct will be established here
function askQuestion() {
    if(chosenFeature == 1){
        CorrectPlace = "Norwegian Sea";
        type = "sea";
        placeQuestion(105, 98);
    }else if (chosenFeature == 2){
        CorrectPlace = "Barents Sea";
        type = "sea";
        placeQuestion(335, 32);
    }else if (chosenFeature == 3){
        CorrectPlace = "Gulf of Bothnia";
        type = "gulf";
        placeQuestion(208, 135);
    }else if (chosenFeature == 4){
        CorrectPlace = "Ural Mountains";
        type = "mountain";
        placeQuestion(336, 170);
    }else if (chosenFeature == 5){
        CorrectPlace = "Gulf of Finland";
        type = "gulf";
        placeQuestion(248, 180);
    }else if (chosenFeature == 6){
        CorrectPlace = "Baltic Sea";
        type = "sea";
        placeQuestion(191, 227);
    }else if (chosenFeature == 7){
        CorrectPlace = "North Sea";
        type = "sea";
        placeQuestion(87, 231);
    }else if (chosenFeature == 8){
        CorrectPlace = "River Thames";
        type = "river";
        placeQuestion(65, 270);
    }else if (chosenFeature == 9){
        CorrectPlace = "English Channel";
        type = "channel";
        placeQuestion(48, 288);
    }else if (chosenFeature == 10){
        CorrectPlace = "Rhine River";
        type = "river";
        placeQuestion(111, 275);
    }else if (chosenFeature == 11){
        CorrectPlace = "Elbe River";
        type = "river";
        placeQuestion(143, 263);
    }else if (chosenFeature == 12){
        CorrectPlace = "Vistula River";
        type = "river";
        placeQuestion(198, 261);
    }else if (chosenFeature == 13){
        CorrectPlace = "Seine River";
        type = "river";
        placeQuestion(87, 300);
    }else if (chosenFeature == 14){
        CorrectPlace = "Bay of Biscay";
        type = "bay";
        placeQuestion(39, 330);
    }else if (chosenFeature == 15){
        CorrectPlace = "Loire River";
        type = "river";
        placeQuestion(87, 322);
    }else if (chosenFeature == 16){
        CorrectPlace = "Pyrenees Mountains";
        type = "mountain";
        placeQuestion(72, 352);
    }else if (chosenFeature == 17){
        CorrectPlace = "Tagus River";
        type = "river";
        placeQuestion(30, 380);
    }else if (chosenFeature == 18){
        CorrectPlace = "Strait of Gibraltar";
        type = "strait";
        placeQuestion(32, 412);
    }else if (chosenFeature == 19){
        CorrectPlace = "Mediterranean Sea";
        type = "sea";
        placeQuestion(107, 404);
    }else if (chosenFeature == 20){
        CorrectPlace = "Alps";
        type = "mountain";
        placeQuestion(135, 319);
    }else if (chosenFeature == 21){
        CorrectPlace = "Po River";
        type = "river";
        placeQuestion(134, 331);
    }else if (chosenFeature == 22){
        CorrectPlace = "Adriatic Sea";
        type = "sea";
        placeQuestion(171, 352);
    }else if (chosenFeature == 23){
        CorrectPlace = "Apennine Mountains";
        type = "mountain";
        placeQuestion(163, 362);
    }else if (chosenFeature == 24){
        CorrectPlace = "Tiber River";
        type = "river";
        placeQuestion(152, 347);
    }else if (chosenFeature == 25){
        CorrectPlace = "Tyrrhenian Sea";
        type = "sea";
        placeQuestion(147, 373);
    }else if (chosenFeature == 26){
        CorrectPlace = "Strait of Sicily";
        type = "strait";
        placeQuestion(163, 404);
    }else if (chosenFeature == 27){
        CorrectPlace = "Strait of Messina";
        type = "strait";
        placeQuestion(171, 391);
    }else if (chosenFeature == 28){
        CorrectPlace = "Ionian Sea";
        type = "sea";
        placeQuestion(192, 383);
    }else if (chosenFeature == 29){
        CorrectPlace = "Carpathian Mountains";
        type = "mountain";
        placeQuestion(232, 302);
    }else if (chosenFeature == 30){
        CorrectPlace = "Danube River";
        type = "river";
        placeQuestion(206, 327);
    }else if (chosenFeature == 31){
        CorrectPlace = "Transylvanian Alps";
        type = "mountain";
        placeQuestion(234, 328);
    }else if (chosenFeature == 32){
        CorrectPlace = "Balkan Mountains";
        type = "mountain";
        placeQuestion(237, 357);
    }else if (chosenFeature == 33){
        CorrectPlace = "Aegean Sea";
        type = "sea";
        placeQuestion(235, 384);
    }else if (chosenFeature == 34){
        CorrectPlace = "Dardanelles Strait";
        type = "strait";
        placeQuestion(245, 373);
    }else if (chosenFeature == 35){
        CorrectPlace = "Bosporus Strait";
        type = "strait";
        placeQuestion(262, 365);
    }else if (chosenFeature == 36){
        CorrectPlace = "Black Sea";
        type = "sea";
        placeQuestion(288, 347);
    }else if (chosenFeature == 37){
        CorrectPlace = "Sea of Azov";
        type = "sea";
        placeQuestion(312, 323);
    }else if (chosenFeature == 38){
        CorrectPlace = "Caspian Sea";
        add(CaspianSeaArrow);
        type = "sea";
        placeQuestion(305, 374);
    }
}

// Places the marker for each of the locations
function placeQuestion(x,y) {
    Marker.setPosition(x, y);
    add(Marker);
    setTimer(getAnswer, questionWait);
}
