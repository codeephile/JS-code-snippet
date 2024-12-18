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
