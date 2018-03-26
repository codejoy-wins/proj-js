// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";

// console.log("It is "+HOUR+" o'clock and "+MINUTE+"minutes"+PERIOD);
// if (MINUTE>=30){
//     HOUR = HOUR+1;
//     console.log("It is almost "+HOUR+PERIOD);
// }

function tellTime(HOUR,MINUTE,PERIOD){
    console.log("It is "+HOUR+" o'clock and "+MINUTE+"minutes"+PERIOD);
    if (MINUTE>=30){
        HOUR = HOUR+1;
        console.log("It is almost "+HOUR+PERIOD);
    }
    else{
        console.log("It is just after"+HOUR+PERIOD);
    }
    return "The Time is defined"
}
tellTime(8,50,"AM");
tellTime(7,15,"PM");

function myName(NAME,G){
    console.log(NAME+" is "+G);
}
myName("Max","Codejoy");
tellTime(1,17,"AM");