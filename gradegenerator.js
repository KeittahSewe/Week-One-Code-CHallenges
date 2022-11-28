function gradegenerator() {
    //Prompts user to input marks
    const prompt = require("prompt-sync")();
    let marks = prompt("Please Enter Marks", "0")
    let grade;
    //checks where students marks falls
    if (marks <= 100 && marks >= 79) {
        grade = "A"
    } else if (marks >= 60 && marks < 79) {
        grade = "B"
    } else if (marks > 49 && marks < 60) {
        grade = "C"
    } else if (marks >= 40 && marks < 50) {
        grade = "D"
    } else if (marks < 40 && marks > 0) {
        grade = "E"
    } else {
        console.log("Invalid input");
        return "Invalid input"
    } 
    console.log(grade); //awards grade
}
gradegenerator();
