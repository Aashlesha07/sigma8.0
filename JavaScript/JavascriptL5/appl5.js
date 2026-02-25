// const student = {
//     name: 'Aashlesha',
//     roll_num: 26,
//     subject: 'maths',
// };

// const students = ['aashlesha', 26, 'maths'];

//create post
const post ={
    username: '@aashukharunkar',
    content: 'This is my #firstPost',
    like: 150,
    reposts: 5,
    tags:['@sankalp','@manisha']
}

console.log(post['content'])
console.log(post.username); //dot operator
console.log(post.tags[0]);

//add & update value
const student ={
    name: "Aashlesha",
    age: 23,
    marks: 94.4,
    city:'Dilhi'
}
student.city ="Mumbai";
student.gender = 'Female';
student.marks = 'A'
console.log(student);

//Nested Object
const classinfo ={
    aman: {
        grede: 'A',
        city: "mumbai"
    },
    shravni: {
        grede: 'O',
        city: "Dilhi"
    },
    satyam: {
        grede: 'B',
        city: "Kalyan"
    }
}
//access
console.log(classinfo.aman);
console.log(classinfo.shravni.city);
//change city
console.log(classinfo.satyam.city = "Gurgao");
console.log(classinfo);

//array object
const classInfos = [ {
    name: aman,
    grede: 'A',
    city: "mumbai",
},
{
    name: 'Shravni',
    grede: 'O',
    city: "Dilhi",
},
{
    name: 'Satyam',
    grede: 'B',
    city: "Kalyan",
},
];


