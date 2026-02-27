//let city = "Mombasa";

function apartment(){
    let apartmentKey = "Apartment Key";
    function bedroom (){
        let pillow = "soft pillow";
        console.log(apartmentKey);// accessing apartmentKey variable
    }
    bedroom();
}

apartment();
console.log(pillow);//this will cause an error because pillow is not accessible outside the bedroom function

let city = "Nairobi";

function apartment(){
    let apartmentKey = "nyayo";

    function bedroom (){
        return `This is my apartment in ${nyayo}`
    }
    bedroom();
}

apartment();
console.log(pillow);//this will cause an error because pillow is not accessible outside the bedroom function


function createDiscount(createDiscount){
    return function(price){
        return price - (price * discount)
    };
}
const tenPercentOff = createDiscount(0.10);

tenPercentOff(1000);
console.log(tenPercentOff(1000));