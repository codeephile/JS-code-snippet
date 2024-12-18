let count = 0;

function countAuto(){
    console.log(count);
     if(count === 10){
         console.log("Count finished");
        return;
    }
     count++;
     setTimeout(countAuto, 1200);
 }
 countAuto();
