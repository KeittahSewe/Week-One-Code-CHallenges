function calculatenetsalary (){ 
    //calculates net salary
    const prompt = require("prompt-sync")();
    let salary = prompt("Enter Basic Salary", "0")
    let benefits = prompt("Enter Benefits", "0")
    glossSalary = salary + benefits;

    let paye = 0;
if (salary >0 && salary <=24000)  {
    paye = 0.1
}else if (salary >24000 && salary< 32333){
    (salary * 0.1) + ((32333-24000) * 0.25)
}else (salary>32333)
    (salary)

}
