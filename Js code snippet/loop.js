// forEach // forEachLoop
let user = ['alice', 'lewis'];
let key = [1001, 1002];
let delay = 0;

user.forEach((name, index) => { 
  delay += 2000;
  setTimeout(() => {
    console.log(`Hello ${name} , Your access key is ${key[index]}`);
  }, delay);
});

// for all // forEachLoop
var username = ['alice', 'lewis', 'johnson'];
var city = ['seoul', 'us', 'tokyo'];

username.forEach((name, index) => {
    users(name, city[index]);
});

function users(name, town){
    setTimeout(() => {
        console.log(`Welcome ${name}, You are from ${town}`);
    }, 3000);
}

---------------------------------------------------
// for string type //
var user = ['alice', 'johnson','lewis', 'katy', 'kira'];

for(let i = 0; i < user.length; i++){

    setTimeout(() => {
        if(user[i] === 'lewis'){
            return; 
        }else{
            console.log(user[i]);
        }
    }, 1200);
}

var fruit = ['apple', 'orange', 'grape', 'pineapple'];

fruit.forEach((name, index) => {
    setTimeout(() => {
        if(name === 'grape'){
            return;
        } else{
            console.log(name);
        }
    }, index * 1200); 
});

-------------------------------------------------
// course note //
// for(let i = 10; i > 0; i--){ //i -= 2 #even 
//     console.log(i);
// }
// console.log("Hello!");

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         continue;  //this will remove 13 and continue to 20
//         //break; // this will break before 13
//     }else{
//         console.log(i);
//     }
// }

  ---------------------------------------------------
  
