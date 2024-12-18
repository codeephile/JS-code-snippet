// let count = 0;

// function countAuto(){
//     console.log(count);
//     if(count === 10){
//         console.log("Count finished");
//         return;
//     }
//     count++;
//     setTimeout(countAuto, 1200);
// }
// countAuto();

let count = 1;

function countAuto(){
    //display with html DOM
    document.getElementById('display').innerHTML = count;

    //if count reach target, display message
    if(count === 10){
        document.getElementById('message').innerHTML = "Boom!"
        //hide count
        document.getElementById('display').style.display = "none";
        return;
    }
    count++;
    setTimeout(countAuto, 800);
}
countAuto();