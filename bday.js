/*
While You Wait
Create a birthday countdown.

var daysUntilMyBirthday = 60;
For every day, print how many days left.

If it's more than 30 days, print a sad message.

If it's less than 30 days, print a message that sounds excited!

If it's less than 5 days, SCREAM IT!

ONCE IT'S YOUR BIRTHDAY, HAVE A PARTY!

60 days until my birthday. Such a long time... :(
59 days until my birthday. Such a long time... :(
58 days until my birthday. Such a long time... :(
2 DAYS UNTIL MY BIRTHDAY!!!
1 DAY UNTIL MY BIRTHDAY!!!
♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*
♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪
*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«
*/
// function bdayCountdown(days){
//     var daysUntilMyBirthday = days;
// for (i=daysUntilMyBirthday;i>=0;i--){
//     console.log("iteration"+i);
//     if (i>30){
//         console.log("Sad"+ i);
//     }
//     if (i<30){
//         console.log("Excited"+ i);
//     }
//     if (i<5){
//         console.log("Ecstatic"+ i);
//     }
//     if (i===0){
//         console.log("Crazy Party");
//     }
//     else{console.log("error?");}
// }
// bdayCountdown(55);
//}
var daysUntilMyBirthday = 117;
for (i=daysUntilMyBirthday;i>=0;i--){
    console.log("iteration"+i);
    if (i>30){
        console.log("Sad"+ i);
    }
    if (i<30){
        console.log("Excited"+ i);
    }
    if (i<5){
        console.log("Ecstatic"+ i);
    }
    if (i===0){
        console.log("Crazy Party");
    }
    // else{
    //     console.log("error?");
    // }
}


function bdayCountdown(days){
    for (i=days;i>=0;i--){
        // console.log("iteration"+i);
        if (i>30){
            // console.log("Sad"+ i);
            console.log(i+" days until my birthday, so sad :(");
        }
        if (i<30 && i>=5){
            // console.log("Excited"+ i);
            console.log(i+" days until my birthday. Yipee!");
        }
        if (i<5 && i!== 0){
            // console.log("Ecstatic"+ i);
            console.log("I can't wait! "+i+ " days until my birthday");
        }
        if (i===0){
            console.log("Crazy Party");
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
        }
    }
}
bdayCountdown(77);