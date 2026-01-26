//Qs01
let num = 34567876540;
if (num % 10 === 0){
    console.log(num + "its good number");
}else {
    console.log(num + "its not good number");
}

//Qs02
let Name = prompt('Enter your name');
let Age = prompt('Enter your age')
alert(Name +' is ' +Age +" year old." )

//Qs03
let Quarter = 2;
switch(Quarter){
    case 1:
        console.log("January,February,March")
        break;
    case 2:
        console.log("April,May,June")
        break;
    case 3:
        console.log("July,August,September")
        break;
    case 4:
        console.log("October,November,December")
        break;
    default:
        console.log("Wrong Quarter Number")
}

//Qs04
if((Name[0] =='A' || Name[0] == 'a') && (Name.length > 5)){
    console.log('golden string');
}else{
    console.log('not golden string');
}

//Qs05
let a = 9;
let b = 9;
let c = 9;

if(a>b && a>c){
    console.log('a is greater');
}else if(b>a && b>c){
    console.log('b is greater');
}else if(c>a && c>b){
    console.log('c is greater');
}else{
    console.log('all are same greater');
}

//Qs06
let num1 = 54678;
let num2 = 8765445456777777778;
if (num1[num1.length-1] === num2[num2.length-1]){
    console.log('same last digit');
} else{
    console.log('different last digit');
}