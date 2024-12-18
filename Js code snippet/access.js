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
