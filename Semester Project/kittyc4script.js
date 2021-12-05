// Kyle Richter 27 Nov 2021


//  *************  switchImage function ******************** \\
var imgNumber = 1;
var timer = setInterval(switchImage, 3000)


function switchImage() {
    imgNumber++;
    if (imgNumber > 8) {
        imgNumber = 1;
    }
    document.getElementById("kittyPICS").src = "./img/" + imgNumber + ".jpg";
}





var metal = "silver"; //to track the value of the service
var category = "Cleaning"; // to track the type of service


function silver() {
    metal = "silver";
}
function gold() {
    metal = "gold";
}
function plat() {
    metal  ="platinum";
}


function Cleaning(){
    category = "Cleaning";
}
function Entertaining() {
    category = "Entertaining";
}
function Training() {
    category = "Training";
}
function Fitness() {
    category = "Fitness";
}





var value = 0; //to store the monetary value of a service
function metalSwitch(metal) {
    switch (metal) {
        case "silver":
            value = 12;
            break;
        case "gold":
            value = 20;
            break;
        case "platinum":
            value = 50;
            break;
        default:
            value = 12;
    }
    return value;

}



var totalText = document.getElementById("total"); //to store the value of the text  displaying the total

var boxID; //to track the checkbox being clicked
var subtotal = 0;
function updateTotal() {
    boxID = document.getElementById(metal + category); 
    value = metalSwitch(metal); //this feels redundant, but it works.
    if (boxID.checked != true){
         subtotal -= value;        
    } else {
        subtotal += value;
    } 
    totalText.innerHTML= "Total = $" +  subtotal;
}



//These became obsolete when I optimized the updateTotal() function

// function updateTotalGold() {
//     boxID = document.getElementById(metal + category);
//     value = 20;
//     if (boxID.checked != true){
//         subtotal -= value;        
//    } else {
//        subtotal += value;
//    } 
//    totalText.innerHTML= "Total = $" +  subtotal;;
// }

// function updateTotalPlat() {
//     boxID = document.getElementById(metal + category);
//     value = 50;
//     if (boxID.checked != true){
//         subtotal -= value;        
//    } else {
//        subtotal += value;
//    } 
//    totalText.innerHTML= "Total = $" +  subtotal;;



