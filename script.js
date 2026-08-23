let students = [];

function addStudent() {
    let name = document.getElementById("studentName").value;

    if (name !== "") {
        students.push(name);
        document.getElementById("studentName").value = "";
        displayStudents(students);
    }
}

function displayStudents(list) {
    let studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    list.forEach(function(student) {
        let li = document.createElement("li");
        li.textContent = student;
        studentList.appendChild(li);
    });
}

function filterStudents() {
    let search = document.getElementById("search").value.toLowerCase();

    let filtered = students.filter(function(student) {
        return student.toLowerCase().includes(search);
    });

    displayStudents(filtered);
}
