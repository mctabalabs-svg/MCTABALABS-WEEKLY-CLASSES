//function== perform a task
//invoke== call afunction

function name (parameter1, parameter2){
    //code to be executed
};


function calculateshipping(region = `domestic`){
    let cost;
    if(region === `domestic`){
        cost = 500;
    }else if(region === `international`) {
        cost = 1500;
    }else {
        cost = 1000;
    }

    return`shipping cost for ${region} is ${cost}`;

}

console.log(calculateshipping(`international`));

// Simple subscribe function
function subscribe() {
  console.log("Thanks for subscribing to my channel!");
  // Redirect to your YouTube channel subscription link
  window.location.href = "https://www.youtube.com/c/YOUR_CHANNEL_NAME?sub_confirmation=1";
}

// Example: automatically show a message after 3 seconds
setTimeout(() => {
  alert("Enjoying the content? Click OK to subscribe!");
  subscribe();
}, 3000);
