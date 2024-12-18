// forEach html //
var username = ['alice', 'lewis', 'katy', 'david', 'johnson'];
var country = ['us', 'canada', 'japan', 'korea', 'russia'];
let delay = 0;
username.forEach((name, index) => {
    delay += 1200;
    setTimeout(() => {
        const user = `Welcome ${name}, you are from ${country[index]}<br/>`;
        document.getElementById('users').innerHTML += user;
    }, delay);
});

---------------------------------------------------------
// forEach //
let user = ['alice', 'lewis'];
let key = [1001, 1002];
let delay = 0;

user.forEach((name, index) => { 
  delay += 2000;
  setTimeout(() => {
    console.log(`Hello ${name} , Your access key is ${key[index]}`);
  }, delay);
});

// for all //
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
