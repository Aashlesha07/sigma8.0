let btn = document.querySelector('#btn');
btn.addEventListener('mouseout', function() {
    console.log('mouse out')
})
btn.addEventListener('click', function() {
    btn.style.backgroundColor='green'
})

let inName = document.querySelector('#name');
inName.addEventListener('keypress', function() {
    console.log('keypressed', this.value)
})

let subject = document.querySelector('#drowup_down');
subject.addEventListener('scroll', function() {
    console.log('Scroll')
})

let heding = document.querySelector('h2')
inName.addEventListener('input', function(){
    heding.innerText=inName.value
})

