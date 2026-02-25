//Qs01
let arr = [8,3,7,5,2,5,8,9,1,6]
let num = 4

function largerThanNum(){
    for(let i=0; i<=arr.length-1;i++){
        if(num<arr[i]){
            console.log(arr[i])
        }
    }
}

largerThanNum();


//QS02
let str = 'abcdabcdefgggh';


function unique(){
    let uniquechar = "";
    for(let i=0; i<str.length; i++){
        if(uniquechar.indexOf(str[i]) == -1){
          uniquechar += str[i];
        }
    }
    return uniquechar;
}

console.log(unique());

//Qs03
let country=["Australia","Germany","United States of America", "India"];

function largcountryName(){
    let ansIdx = 0;
for(let i= 0; i<country.length; i++){
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if(currLen > ansLen){
        ansIdx = i;
    }
    
}
return country[ansIdx];
}

console.log(largcountryName(country));

//Qs04
let strg = 'aashlesha sunil kharunkar'

function countVowels(){
    let count = 0;
    for(let i=0; i<strg.length; i++){
        if(strg[i] == "a" ||strg[i] == "o"|| strg[i] == "u" ||strg[i] == "e" || strg[i] == "i"){
            count++
        }
    }
    return count
}
console.log(countVowels())

//Qs05
let star = 100;
let end = 200;

function randomNumGenrate(){
    let diff = end -star
    return (Math.floor(Math.random()*diff))+99;
}
console.log(randomNumGenrate())