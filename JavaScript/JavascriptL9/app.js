let link = document.querySelectorAll('.box a');

for(link of link){
    link.style.color ="purple"
}

// for (let i =0; i<link.length; i++){
//     link [i].style.color ="purple";
// }

// practise question

let paragraph = document.createElement('p');
paragraph.innerText="Hey I'm red!";
document.querySelector('body').append(paragraph);
paragraph.style.color='red';

let heading = document.createElement('h3');
heading.innerText="I'm a blue h3! ";
document.querySelector('body').append(heading);
heading.style.color='blue'

let box = document.createElement('div')
document.querySelector('body').append(box)
box.classList.add("Box");
let h1 = document.createElement('h1');
h1.innerText="I'm in a div";
box.appendChild(h1)
let p1 = document.createElement('p');
p1.innerText="Me too!";
box.appendChild(p1)


//Assignmeint Question 09
//Qs1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Clickme";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


//qs2
input.setAttribute('Placeholder', 'username');
button.setAttribute('id', 'btn');

//qs3
let btn =document.querySelector("#btn")
btn.classList.add("btnStyle");

//qs4
let heading1 = document.createElement('h1');
heading1.innerText='DOM Practice';
document.querySelector('body').append(heading1);
heading1.classList.add('hed1')

//qs5
let paragraph1 = document.createElement('p');
paragraph1.innerHTML='Apna College <b>Delta</b> Practice';
document.querySelector('body').append(paragraph1);


