/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

const passwordNotAllowed = "This password you set should not be used because it glitches the system";
function access(password,enteredPassword){
    if (enteredPassword.length>=5) { 
        if (password !== "forgot" && password !== "reset") {        
            if (enteredPassword === password) {
                console.log("Access Granted!");
            } else if (enteredPassword === "forgot") {
                console.log("Here is a hint");
            } else if(enteredPassword === "reset") {
                console.log("Let's reset your account");
            } else if (enteredPassword !== password) {
                console.log("Access Denied!");
            }
        } else {
            console.log(passwordNotAllowed);
        }
    } else {
        console.log("Your password is too short!");
    }
}

access("pass123","1234");
   // Your password is too short!
access("forgot","pass234");
    // This password you set should not be used because it glitches the system
access("reset","pass234");
    // This password you set should not be used because it glitches the system
access("pass123","pass123");
    // Access Granted!
access("pass123","pass321");
    // Access Denied
access("pass123","forgot");
    // Here is a hint
access("pass123","reset");
    // Let's reset your account
