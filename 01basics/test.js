//variables 
const accountId = 144533 //const keyword value can't be changed
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //bina variable ke aage ke likhe we can use variable , but not a good practice
let accountState;

//in initial days , var had problem related to 
//scope which is not the case with let, 
//therefore it is suitable to use let
accountEmail = "xyz@gmail.com"
accountPassword = "123456"
accountCity = "raipur"
console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
