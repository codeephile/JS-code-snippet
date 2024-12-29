//api fetch async/callback //

// function fetchData(url, options) {
//   // options can be an object containing headers, method, etc.
// }
// fetchData("https://api.example.com", { method: "GET", headers: { "Content-Type": "application/json" } });

-----------------------------------------------------
// fetch api // syntax //
// fetch('http//www.example.com/api/')
//     .then(res => res.json())
//     .then(data => console.log(data))
// .catch(error => console.log('ERROR'))


// simple call api//
// fetch('http://example.com/api/users')
//     .then(res => {
//         console.log(res);
//     });


// json format convert to javascript to enable read //
// e.g 1//
// fetch('http://example.com/api/users')
//     .then(res => res.json()) //json to normal javascript //
//     .then(data => {
//         console.log(data); //this is parsed json to display javascript//
//     }); 

// e.g 2 //
// fetch("https://example.com/api/")
//     .then(response => {
//         return response.json();
//     })
//     .then(data =>{
//         // console.log(data); //grab data out of the api
//         data.forEach(user => {
//             console.log(user); 
//         })
//     });
------------------------------------------------------
// simple api (get)// .then() //

// const apiUrl = 'https://example.com/api';
// fetch(apiUrl)
// .then(response => {
//     if(!response.ok){
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
// })
// .then(data => {
//     console.log('Data received: ', data);
// })
// .catch(error => {
//     console.error('Error fetching: ', error);
// });



// fetch('https://fakestoreapi.com/products/5')
//     .then(res => {

//         if(!res.ok){
//             console.log('Problem');
//             return;
//         }
//         return res.json();
//     })
//     .then(product => {
//         console.log(product.title);  //convert json to javascript 
//     })
//     .catch(error => {
//         console.log("Error: ", error.message);
//     });



------------------------------------------------------
// POST (create) //

const api = 'https://api.escuelajs.co/api/v1/users/';
const newUser = {
    "name": "satoru",
    "email": "satoru@email.com",
    "password": "12345",
    "avatar": "https://picsum.photos/800",
}

fetch(api, {
    method: 'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(newUser)
})
    .then(response => {
        if(!response.ok){
            throw new Error(`Error: ${response}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Created: ', data);
    })
    .catch(error => {
        console.error("Error: ", error.message);
    });


// GET //
const getApi = 'https://api.escuelajs.co/api/v1/users/';
fetch(getApi)
    .then(response => {
        if(!response.ok){
            throw new Error(`Fetching Error: ${response}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received: ", data);
    })
    .catch(error => {
        console.error("Error: ", error.message);
    })


// DELETE //
const deleteApi = 'https://api.escuelajs.co/api/v1/users/';
const userId = 45;

fetch(`${deleteApi}${userId}`, {
    method: "DELETE",
})
    .then(Response => {
        if(!Response.ok){
            throw new Error(`Error: ${Response}`);
        }
        console.log(`User ${userId} deleted`);
    })
    .catch(error => {
        console.error("Error: ", error.message);
    });


// UPDATE //
const api = 'https://api.esceulajs.co/api/v1/users/';
const userId = 1;
const updateUser = {
    "name": "pokemon",
    "email": "poke@email.com",
    "password": "12345678",
    "avatar": "https://picsum.photos/800",
};

fetch(api + userId, {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateUser),
})
    .then(response => {
        if(!response.ok){
            throw new Error(`Error: ${response}`);
        }else{
            return response.json();
        }
    })
    .then(data => {
        console.log("Updated: ", data)
    })
    .catch(error => {
        console.error('Error: ', error.message)
    });
-----------------------------------------------------
// simple api (get) // await //
    
const apiFunction = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/users/');
    const jData = await res.json();
    console.log(jData);
    return jData;
}
apiFunction();


const apiFunction = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users/');
    const jData = await response.json();
    return jData;
}
const secFunction = async () => {
    const jsonData = await apiFunction();
    console.log(jsonData);
}
secFunction();


const getAllEmails = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users/');
    const jData = await response.json();

    const emails = jData.map(user => {
        return user.email;
    })
    // return emails; //promise pending 
    console.log(emails);
}
getAllEmails();
// console.log(getAllEmails()); /promise pending 


const getAllEmails = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/users/');
    const jData = await res.json();

    const usermails = jData.map(user => {
        return user.email;
    });
    // const mails = jData.map(user => user.email || "No email available");

    display(usermails);
}
const display = (data) => {
    console.log(data);
}
getAllEmails();


//2nd parameter of fetch is object //
const getAllEmails = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users/',{
        method: "GET",
        headers: {
            'Content-Type': "application/json",
        }
    });
    const jData = await response.json();
    console.log(jData);
}
getAllEmails();


//post type// 
const joke = {  //create object
    id: "12345678",
    joke: "What do you call a bear with no teeth?",
}

const jokeObject = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(joke)
    });
    const jsonResponse = await response.json();

    console.log(jsonResponse);
}
jokeObject();
