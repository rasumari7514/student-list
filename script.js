const student = [
    {name: "Mathi", grade: "Grade A"},
    {name: "Kavi", grade: "Grade B"},
    {name: "Arun", grade: "Grade C"},
    {name: "Divya", grade: "Grade D"}
];

function addStudent(name, grade){
    student.push({name: name, grade: grade});
}

addStudent("Ravi", "Grade A");
addStudent("Priya", "Grade B");

console.log("All students:");
console.log(student);

function filterByGrade(grade){
    return student.filter(student => student.grade === grade);
}

const gradeAStudents = filterByGrade("Grade A");
console.log("Students with Grade A:");
console.log(gradeAStudents);

const gradeBStudents = filterByGrade("Grade B");
console.log("Students with Grade B:");
console.log(gradeBStudents);
