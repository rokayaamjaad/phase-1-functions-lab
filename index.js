// Code your solution in this file!
let pickupLocation;
function distanceFromHqInBlocks(someValue) {
   if (someValue> 42){
    return pickupLocation = someValue - 42}
    else {
        return pickupLocation = -someValue + 42
    }



}
console.log(distanceFromHqInBlocks(50))
    function distanceFromHqInFeet(someValue) {

        let feet = distanceFromHqInBlocks(someValue)*264;
        return feet;

    }

   function distanceTravelledInFeet(start,  destination ) {

    let distance;
    if (distanceFromHqInFeet( destination)> distanceFromHqInFeet(start)){
        return distance = distanceFromHqInFeet(destination)- distanceFromHqInFeet(start);
    } else {
        return distance = -distanceFromHqInFeet(destination)+ distanceFromHqInFeet(start)
    }
   }


    function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,  destination ) ;
    let price;
    if (distance <= 400){
        return  price = 0;
    }
    if (distance>400 && distance <= 2000){
        return price = 2.56;
    }
    if (distance> 2000 && distance <= 2500){
        return price = 25;
    }
    if (distance>2500){
        return 'cannot travel that far';
    }

    }
   
