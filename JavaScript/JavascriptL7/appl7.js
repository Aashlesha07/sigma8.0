//this keyword
const student ={
    name: "manish",
    maths: 24,
    eng: 20,
    phy: 98,
    getAvg(){
        let avg = (this.maths+this.eng+this.phy/3);
        console.log(avg);
        console.log(`${this.name} is got avg ${avg} `)
    }
}
console.log(student.getAvg())

//arrow function
let sumval = (a,b) =>{
    console.log(a+b);
}
console.log(sumval(5,4));

let cube = (n) =>{
    return n*n*n;
}
console.log(cube(6))

let pow = (a,b) =>(
    a**b
)
console.log(pow(3,4));

//set timeout
setTimeout(() =>{
    console.log("its timeout")
},4000)

    console.log("its after timeout")

//set Interval
let id = setInterval(() =>{
    console.log("its Interval")
},4000)

// for stop interval
clearInterval(id)


//this with arrow 
let classmate ={ // this is globle scope
    name: "aman",
    marks: 95,
    prop: this,
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () =>{
        console.log(this);
        return this.marks;
    }
}
console.log(classmate.prop)
console.log(classmate.getName())
console.log(classmate.getMarks())

