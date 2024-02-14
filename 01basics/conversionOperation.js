let score  = "33abc"
/* this issue mainly arises in js because ,
 when we declare we know that 33 is a number , 
 but suppose we are working in backend and 
 we have received the number from a form where
  it was defined as string , so we must check the datatype, we know that 
  we can check it through typeof*/

console.log(typeof(score)); //output - string
let valueInNumber = Number(score) //now this guarantees that the score is a number only
console.log(typeof(valueInNumber)) //output - number
console.log(valueInNumber) //output - NaN

//in conclusion conversion of the following is:
//"33" => 33
//"33abc" => NaN
//"true" => 1,false = > 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1 => true , 0 => false
//"" = false;
//"enigma" = true
