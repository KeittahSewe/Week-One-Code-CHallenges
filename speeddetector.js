function detectspeed (){
    // receives speed as input 
    const prompt = require("prompt-sync")();
    let speed = prompt("Please Enter Speed", "0")
    //verifies if speed is above limit 
if (speed <70 && speed >0){
    console.log("Ok");
    //gives demerit points based on every 5km/h above the speed limit
}else if (speed >70){
    let demerits = ((speed - 70)/5) //calculates demerit points
    console.log(demerits);
    if (demerits >12)
console.log("License suspended");
}


}
detectspeed();