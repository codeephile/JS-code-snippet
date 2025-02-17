// fetch api // syntax //

// fetch('http//www.example.com/api/')
//     .then(res => res.json())
//     .then(data => console.log(data))
// .catch(error => console.log('ERROR'))

------------------------------------------------------
// api using // .then() //

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

//e.g 2//
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
// api using async await //
    
// const apiFunction = async () => {
//     const res = await fetch('https://api.escuelajs.co/api/v1/users/');
//     const jData = await res.json();
//     console.log(jData);
//     return jData;
// }
// apiFunction();

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

-----------------------------------------------------------
// try catch //
const getApi = async () => {
    try{
        const api = await fetch('https://api.escuelajs.co/api/v1/users/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(!api.ok){
            throw new Error(`Fetching Error: ${api.status}`);
        }else{
            const jData = await api.json();
            console.log("Data Received: ", jData);
        }
    }catch(error){
        console.error('Something went wrong: ', error.message);
    }
}
getApi();


const addNew = {
    name: "pikachu",
    email: "pikachu@email.com",
    password: "12345",
    avatar: "https://picsum.photos/800",
};

const postApi = async () => {
    try{
        const api = await fetch('https://api.escuelajs.co/api/v1/users/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(addNew),
        })
        if(!api.ok){
            throw new Error(`Fetching Error: ${api.status}`);
        }
        const data = await api.json();
        console.log(data);
    }catch(error){
        console.error('Something went wrong: ', error.message);
    }
}
postApi();


const deleteApi = async (userId) => {
    try{
        const api = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
            }
        });
        if(!api.ok){
            throw new Error(`Deleting Error: ${api}`);
        }else{
            const jsonData = await api.json();
            console.log("Deleted Data: ", jsonData);
        }
    }catch(error){
        console.error('Error: ', error.message);
    }
}
deleteApi(4);

-----------------------------------------------------------
