

function onPageLoad() {

    document.getElementById("createBtn").onclick = onCreateBtnClicked;
    document.getElementById("cancelBtn").onclick = onCancelBtnClicked;
    document.getElementById("newBtn").onclick = onNewBtnClicked;

    let items = modelGetAllStudents();
    for (let i = 0; i < items.length; i++) {
        addTableItems(items[i]);
    }

    clearInputForm();
}

function onCreateBtnClicked() {

    if (!valadateControls()) {
        return;
    }

    let form = document.forms["editForm"];
    let newStudent = modelCreateStudent(
        form.firstNameEdit.value,
        form.lastNameEdit.value,
        form.genderMaleRadio.checked,
        parseInt(form.uvuIdEdit.value),
        form.raceSelect.value,
        parseInt(form.ageEdit.value),
        form.isVeteran.checked
    );
    addTableItems(newStudent);
    clearInputForm();
}

function onCancelBtnClicked() {
    clearInputForm();
}

function onNewBtnClicked() {
    document.getElementById("formTitle").innerText = "Create new Student";

    document.getElementById("studentEditArea").style.display = "block";
    document.getElementById("studentListArea").style.display = "none";
}

function addTableItems(student) {
    let table = document.getElementById("studentTable");
    let row = document.createElement("div");
    let remove = document.createElement("button");

    row.id = 'row' + student.id;
    row.className = "registration-row";
    let cells = [student.uvuId, student.sortableName(), student.male ? "Male" : "Female"];

    for (let cell of cells) {
        row.innerHTML += `<div> ${cell} </div>`
    }

    remove.innerText = "Delete";
    remove.className = "removeBtn";
    remove.onclick = function () {
        Remove(this);
    }

    row.append(remove);
    table.append(row);

}

function valadateControls() {
    let form = document.forms["editForm"];
    let isValidated = true;
    if (form.firstNameEdit.value === "") {
        document.getElementById("firstNameError").innerHTML = "*First name is required.";
        isValidated = false;
    }
    else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    if (form.lastNameEdit.value === "") {
        document.getElementById("lastNameError").innerHTML = "*Last name is required.";
        isValidated = false;
    }
    else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    if (!form.genderMaleRadio.checked && !form.genderFemaleRadio.checked) {
        document.getElementById("genderError").innerHTML = "*Gender not given";
        isValidated = false;

    }
    else {
        document.getElementById("genderError").innerHTML = "";
    }
    if (form.uvuIdEdit.value === "") {
        document.getElementById("uvuIdError").innerHTML = "*UVU ID is required.";
        isValidated = false;
    }

    else if (isNaN(parseInt(form.uvuIdEdit.value))) {
        document.getElementById("uvuIdError").innerHTML = "*UVU ID must be a number";
        isValidated = false;
    }
    else if (form.uvuIdEdit.value.length !== 8) {
        document.getElementById("uvuIdError").innerHTML = "*UVU ID must be eight digit";
        isValidated = false;

    }
    else {
        document.getElementById("uvuIdError").innerHTML = "";
    }

    if (form.raceSelect.selectedIndex === -1) {
        document.getElementById("raceError").innerHTML = "*Race is required";
        isValidated = false;
    }
    else {
        document.getElementById("raceError").innerHTML = "";
    }

    if (form.ageEdit.value === "") {
        document.getElementById("ageError").innerHTML = "*Age is required.";
        isValidated = false;
    }
    else if (isNaN(parseInt(form.ageEdit.value))) {
        document.getElementById("ageError").innerHTML = "*Age must be a number";
        isValidated = false;
    }
    else if (parseInt(form.ageEdit.value) < 1 || parseInt(form.ageEdit.value) > 110) {
        document.getElementById("ageError").innerHTML = "*Age must be between 1 and 110";
        isValidated = false;
    }
    else {
        document.getElementById("ageError").innerHTML = "";
    }

    return isValidated;

}


function clearInputForm() {
    //hide the form and show context list
    document.getElementById("studentEditArea").style.display = "none";
    document.getElementById("studentListArea").style.display = "block";

    let form = document.forms["editForm"];
    form.firstNameEdit.value = "";
    document.getElementById("firstNameError").innerText = "";

    form.lastNameEdit.value = "";
    document.getElementById("lastNameError").innerText = "";

    form.genderMaleRadio.checked = false;
    form.genderFemaleRadio.checked = false;
    document.getElementById("genderError").innerText = "";

    form.uvuIdEdit.value = "";
    document.getElementById("uvuIdError").innerText = "";

    form.raceSelect.selectedIndex = -1;
    document.getElementById("raceError").innerText = "";

    form.ageEdit.value = "";
    document.getElementById("ageError").innerText = "";

    form.isVeteran.checked = false;
}

function Remove(btn) {
    let parentRow = btn.parentNode;
    parentRow.parentNode.removeChild(parentRow);
}

