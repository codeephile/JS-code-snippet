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

