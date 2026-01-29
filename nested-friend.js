import { averageMarks as myMarks } from "./Grade_Calculator.js";

//* Task - 4 Solution: (nested-friend)
//  TODO: if you get more then 80 then inside your friend score. If your friend get more than 80. then go for a lunch. if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen. if your friend get less than 40, block your friend .if you get less than 80 go to home and sleep and act sad

if (myMarks > 80 && myMarks <= 100) {
    const friendMarks = 95;
    console.log("friend marks:", friendMarks);
    if (friendMarks >= 80 && friendMarks <= 100){
        console.log("lets take lunch");
    } else if (friendMarks >= 60 && friendMarks < 80){
        console.log("good luck next time");
    } else if (friendMarks >= 40 && friendMarks < 60) {
        console.log("friend's message unseen");
    } else if (friendMarks < 40 && friendMarks >= 0) {
        console.log("block friend");
    }else {
        console.log("make sure marks(0-100)");
    }
} else if (myMarks >= 0 && myMarks < 80){
    console.log("Go home, Act sad and Sleep");
} else {
    console.log("Please Provide (0-100)");
}
//Output: friendmarks = 95, lets take lunch