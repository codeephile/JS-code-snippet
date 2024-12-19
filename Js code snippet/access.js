// async function //
function login () {
    var user = prompt("Enter Name");
    var key = prompt("Enter key");
    var logged = false;

    if(user && key){
        logged = true;
        console.log("Accessed");
    }else{
        console.log("Access denied");
    }
}

var count = 1;
function countAuto(){
    console.log("Count: ", count);
    count++;

    if(count === 10){
        console.log("You win the jackpot");
        return;
    }
    setTimeout(countAuto, 1200);
}

async function doTask(){
    try{
        var logged = login();
        if(logged){
            countAuto();
        } else{
            console.log("Please Log In");
        }
    }
    catch(error){
        console.error(error);
    }
}
doTask();
-------------------------------------------------

// while loop //
var logged = false;
var user;
var key;
var count = 1;

while(!logged){
    user = prompt("Enter Name");
    key = prompt("Enter Key");

    if(user && key){
        logged = true;
        console.log("User Accessed");
    }else{
        console.log("Access Denied");
    }
}
const countAuto = () => {
    if(logged){
        console.log("Timing: ", count);
        count++;
    }
    if(count === 10){
        console.log("Boom!");
        return;
    }
    setTimeout(countAuto, 1200);
}
countAuto();
-----------------------------------------------

// random check //
var logged = false;
var user;
var type;
var key;
var count = 5;
var prizes = [
    'Iphone 16 pro', '$1000', '$5000', '$100', 'Bike',
    'RobotToy', 'BunnyToy', '50% discount',
    'Shopping Mall $100 cupon', 'SkateBoard'
]
var prizeChecked = false;
const login = () => {
    user = prompt("Fill your name");
    type = prompt("Your occupation");
    key = prompt("Fill your pin");
    if(user && type && key){
        logged = true;
        console.log("Accessed");
    } else{
        console.log("Access Denied");
    }
    check();
}

const check = () => {
    if(logged){
        if(!prizeChecked){
            console.log("Let me check your prize");
            prizeChecked = true;
        }
        if(prizeCheck = true){
            console.log("Count: ", count);
            count--;
        }
        
        if(count === 0){
            var randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
            alert(`Congratulation! You won ${randomPrize}`);
            return;
        }
        setTimeout(check, 1200);
    }
}
login();
