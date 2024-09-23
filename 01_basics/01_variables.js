const accountId = 1444121
let accountEmail = "america@gmail.com"
var accountPassword = "1234"
accountCity = "New York"
let accountState;

// accountId = 2 // not allowed

accountEmail = "japna@gmail.com"
accountPassword = "2345"
accountCity = "tokyo"

/*  prefer not to use var 
    because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])