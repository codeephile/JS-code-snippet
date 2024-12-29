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


// // json format convert to javascript to enable read //
// fetch('http://example.com/api/users')
//     .then(res => res.json()) //json to normal javascript //
//     .then(data => {
//         console.log(data); //this is parsed json to display javascript//
//     }); 

------------------------------------------------------
// simple api (get)// .then() //

// const apiUrl = 'https://fakestoreapi.com/products';
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
// simple api (get) // await

