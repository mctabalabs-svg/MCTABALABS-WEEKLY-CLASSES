//fetch() - function used to make http request to fetch resourses json styled data , images,files
//fetch(url,{options}) //GET,POST,DELETE
//fetch() returns apromise meaning its asynchronous
//that means that we must handle it with .then() and .await()
//instagram
//browser sends a request->server sends the data back
//fetch() is how we ask for that data in js

// const data = fetch(url);
//console.log(data);

// fetch(`https://jsonplaceholder.typicode.com/users/3`)
//     .then(res=>{
//         console.log("Response object:", res);       //res is a response object & it contains status code.header& data still sealed

//         if(!res.ok){        //checks if the server responded with a success status
//             throw new Error("Student not found");       //if status is 400,500..... we manually create an error
//         }
//         return res.json();          //converts the json text into a js object
//     })

//     .then(student =>{
//         console.log("Full student object:", student);
//         // console.log(`Name: {student name}`);
//     })

//     .catch(err =>{
//         console.log("error:", err.message);
//     });

    //fetch() > response object(res) > check res.ok > res.json > actual js  object


async function instagram(){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/3`);
        if(!response.ok){
            throw new ErrorEvent("Post not found")
        }
        const post = await response.json()
        console.log("Full post",post)
    }catch (error){
        console.log("ERROR",error.message)
    }
}
instagram();





























































































