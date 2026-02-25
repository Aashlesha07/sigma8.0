// Qs01
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0; i<= arr.length-1; i++){
    if(arr[i] == 2){
        arr.splice(i,1);
    }
}
console.log(arr);


// Qs02
let number = 287152;
let count = 0;

let copy = number;
while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//Qs03
let numbers = 287152;
let sum = 0;
let copys = number;
while(copys>0){
    let digit = copys%10;
    sum+=digit;
    copys = Math.floor(copys/10);
}
console.log(sum);

let numb = 0;

let fact = 1;
for(let i = 1; i<=numb; i++){
    fact*=i;
}
console.log(fact);

let largestnum = [1,2,3,4,5,6,2,3,-2,-7];
let large = 0;

for(let i = 0; i<=largestnum.length-1; i++){
    if(large < largestnum[i]){
        large = largestnum[i];
    }
}
console.log(large);
