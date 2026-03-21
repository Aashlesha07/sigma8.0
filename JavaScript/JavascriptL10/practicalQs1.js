function getRandomColor(){
let red = Math.floor((Math.random())*255)
let blue = Math.floor((Math.random())*255)
let green = Math.floor((Math.random())*255)

let color = `RGB(${red},${green},${blue})`;
return color;
}

let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let heading = document.querySelector('h1');
    heading.innerHTML=getRandomColor();
    console.log(getRandomColor())
    
    let box = document.querySelector('#box');
    box.style.backgroundColor = getRandomColor();
})
