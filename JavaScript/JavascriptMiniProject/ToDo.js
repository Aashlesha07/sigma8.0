let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input')

btn.addEventListener('click', function(){
    let li = document.createElement('li');
    ul.appendChild(li)
    li.innerText = inp.value;
    inp.value = '';

    let delbtn = document.createElement('button')
    delbtn.innerText='delete';
    delbtn.classList.add('delete')
    li.appendChild(delbtn)

    delbtn.addEventListener('click', function(){
        ul.removeChild(li)
    })
})

