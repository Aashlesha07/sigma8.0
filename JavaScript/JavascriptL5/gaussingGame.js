let max = prompt('Enter the Max Number for Guess the Number');
let randomNum = (Math.floor(Math.random()*max))+1;
let guess = prompt("Now guess the Number");
while(false){
    if(guess == "quite"){
        console.log("user quite")
        break;
    }
if(guess === randomNum){
    console.log('Its Correct guess');
    break;
}else{
    console.log('Its not correct, Try again')
    guess = prompt("Now guess the Number");

}
}
