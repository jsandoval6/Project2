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

function GetItemById(id) {
    for (let i in studentList) {
        if (studentList[i].id === id) {
            return studentList[i];
        }
    }
    return undefined;
}

function UpdateItem(id, firstName, lastName, male, uvuId, race, age, isVeteran) {
    let student = GetItemById(id);
    if (!student) {
        return undefined;
    }

    student.firstName = firstName;
    student.lastName = lastName;
    student.male = male;
    student.uvuId = uvuId;
    student.race = race;
    student.age = age;
    student.isVeteran = isVeteran;

    return student;
}

function DeleteItem(id) {
    for (let i in studentList) {
        if (studentList[i].id === id) {
            return studentList.splice(i, 1);
            break;
        }
    }
}