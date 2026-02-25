//Qs1
let arr1 = [7,9,0,-2];
let n1 = 3;
let ans1 = arr1.slice(0, n1);
console.log(ans1);

//Qs2
let arr2 = [7,9,0,-2];
let n2 = 3;
let ans2 = arr2.slice(-n2);
console.log(ans2);

//Qs3
let input = prompt("Enter any Massege");
if(input.length == 0){
    console.log('This is emty string')
}else{
    console.log('this is not emty string')
}

//Qs4
let names = 'AaSHLeshA';
let index = 3

if(names[index] == names[index].toLowerCase()){
    console.log('This character in lowercase');
}else{
    console.log('This character in uppercase')
}

//Qs5
let feedback = prompt('enter feedback');
console.log(feedback.trim());

//Qs6
let cars = ['audi','maruti','bmw'];
console.log(cars.includes('maruti'))