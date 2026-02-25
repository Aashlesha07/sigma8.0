//Javascript(part4)
//Loop
for(let i=1; i<=5; i++){
    console.log(i);
}

//odd number
for(let i = 1; i<=15; i++){
    if(i%2 != 0){
        console.log(i +"is odd number" )
    } 
}

//even number
for(let i=10; i>=2; i--){
    if(i%2 == 0){
        console.log(i +"is even number" )
    }
}

// multiplication table 5
for(let i = 1; i<=50; i++){
    if (i%5 == 0){
        console.log(i)
    }
}

//Nested Loop
for(let i=1;i<=3;i++){
    console.log('outer loop',i)
    for(let j=1;j<=3;j++){
        console.log(j)
    }
}

//Guess Fev moive
// let movie = "Avtar";
// let Guess = prompt('Guess my Fev Movie');

// while(Guess != movie){
//     if(Guess == 'quite'){
//         console.log('you quite the game');
//         break;
//     }
//     console.log('Sorry, please Try Again')
//     Guess = prompt('Guess my Fev Movie');
// }

// if(Guess == movie){
//     console.log('Perfect Guess');
// }


let a = 1;
while(a<=5){
    if(a==3){
        break;
    }
    console.log(a);
    a++;
}

let fruit = ['apple','mango','banana','litchi','orange'];
// for(let i =1; i<fruit.length; i = i+2)  for odd index
for(let i =1; i<fruit.length; i++){
    console.log(i, fruit[i]);
}

//nested loop with nested array
let heros = [['ironman','spiderman','thor'],['superman','wonder woman','flash']];
for(let i = 0; i<heros.length; i++){
    console.log(i)
    for(let j=0;j<heros[i].length;j++){
        console.log(heros[i][j])
    }
}

//for of
for(frt of fruit){
    console.log(frt);
}

for (char of 'asdfghjkly'){
    console.log(char)
}

//nested for of
for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}

//todo app

let todo = [];
let req = prompt("please enter your request")
while(true){
    let req = prompt("please enter your request")
    if(req == 'quite'){
        console.log('your quite from to do app');
    }
    if(req =='list'){
        console.log('---------');
        for(let i=0; i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log('---------');
    }else if(req == 'add'){
        let task = prompt('plese enter the task you want to add');
        todo.push(task);
        console.log(task);
        break;
    }else if (req == 'delete'){
        let remove = prompt('plese enter the task you want to delete')
        todo.splice(todo.includes(remove),1);
    }
}