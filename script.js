var students = [
    {
        roll:"Divanshu",
        class:"BCA",
        college:"CT- Maq",
        currentSemester:6,
        lastSemMarks:324,
        personalInfo:{
            age:19,
            fathersName:"Father"
            mothersName:"Mother",

        },
        marks:[300,322,350,400,450,324]
    },
    {
        roll:2,
        name:"Sumilan",
        class:"B Tech CSE",
        college:"DAV Uni",
        "is graduate":false,
        currentSemester:5,
        lastSemMarks:450,
        personalInfo:{
            age:20,
            fathersName:"Father",
            mothersName:"Mother"
        },
        marks:[320,382,390,440,450]
    },
    {
        roll:3,
        name:"Shubha",
        class:"BCA",
        college:"DAV Uni",
        "is graduate":false,
        currentSemester:1,
        lastSemMarks:null,
        personalInfo:{
            age:20,
            fathersName:"Father",
            mothersName:"Mother"
        },
        marks:[]
    }
]
// console.log(students);
// console.log(students[1]);
// console.log(students[1].college);
// console.log(students[1]['college']);
// console.log(students[1].personalInfo.age);
// console.log(students[1]['personalInfo']['age']);
// console.log(students[0]['is graduate']);
// console.log(students[1]['marks'][2]);
// console.log(students[1].marks[2]);


// for(let i = 0; i<students.length; i++){
//     console.log(students[i]);
// }

// for(let i = 0; i<students.length; i++){
//     console.log(students[i].name);
// }

// for(let i in students){
//     console.log(students[i].personalInfo.age);
// }

// for(let i in students){
//     console.log(students[i].marks[students[i].marks.length-1]);
// }


// for(let i of students){
//     if(i.personalInfo.age==20)
//     console.log(i.name);
// }

for(let i of students){
    var sum = 0
    for(let j of i.marks){
        sum += j
    }
    console.log(i.name ,sum);
}