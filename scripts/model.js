let studentList = [];
let nextStudentId = 1000;

function Student(
    firstName,
    lastName,
    male,
    uvuId,
    race,
    age,
    isVeteran
) {
    this.id = nextStudentId++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.male = male;
    this.uvuId = uvuId;
    this.race = race;
    this.age = age;
    this.isVeteran = isVeteran;

    this.sortableName = function () {
        return this.lastName + ', ' + this.firstName;
    }
}

function modelCreateStudent(
    firstName,
    lastName,
    male,
    uvuId,
    race,
    age,
    isVeteran
) {
    let newStudent = new Student(firstName, lastName, male, uvuId, race, age, isVeteran);
    studentList.push(newStudent);
    return newStudent;
}

function modelGetAllStudents() {
    return studentList;
}

function modelGetStudent(id) {
    for (let i in studentList) {
        if (studentList[i].id === id) {
            return studentList[i];
        }
    }
    return undefined;
}