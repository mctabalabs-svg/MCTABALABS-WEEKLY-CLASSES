//GET - used to get dat
//POST - it create a new dat
//PUT - it update the data
//DELETE - it removes data

//fetch(URL,METHODS)
//connect the output element

const output = document.getElementById("output");

async function deleteStudent(){
    output.textContent = "deleting student...";

    try{
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users",{
            method: "DELETE",
        });
            

        if(!response.ok){
            throw new Error("failed to delete student");
        }

        const Student = await response.json()

        output.textContent = "student deleted successfully";
    }catch(error){
        output.textContent = "Error:" + error.message;
    }
}









