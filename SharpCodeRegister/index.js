function login() {
  let emailLogin = document.getElementById("email").value.toLowerCase();
  let passwordLogin = document.getElementById("password").value;
  if (emailLogin == "sharpcode@gmail.com" && passwordLogin == "sharpcode") {
    window.location = "dashboard.html";
  } else {
    //var element = document.getElementsByClassName("error");
    document.querySelector(".error").style.visibility = "visible";
    //element.style.visibility = "visible";
  }
}

function register() {
 
  document.querySelector(".container-filter").style.visibility = "visible";
}

var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData);
      var input = document.getElementById("file");
      var fReader = new FileReader();
      fReader.readAsDataURL(input.files[0]);
      fReader.onloadend = function (event) {
        var img = document.querySelector(".output");
        img.src = event.target.result;
        img.className += "output";
      };
      //document.querySelector(".output").classList.add("output");
      //document.querySelector(".output").classList.toggle("output");

      //var image = document.getElementById("output");
      //image.src = URL.createObjectURL(event.target.files[0]);
    } else updateRecord(formData);
    resetForm();
  }
}
debugger;
function readFormData() {
  
  var formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
 formData["lastName"] = document.getElementById("lastName").value;
  formData["email"] = document.getElementById("email").value;
  formData["address"] = document.getElementById("address").value;
  //formData["city"] = document.getElementById("file").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("memberList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = `<p style = "margin-top: 30px; font: 30px; font-weight: bold;">${data.firstName}</p>`;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = `<p style = "margin-top: 30px; font: 30px; font-weight: bold;">${data.lastName}</p>`;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<p style = "margin-top: 30px; font: 30px; font-weight: bold;">${data.email}</p>`;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<p style = "margin-top: 30px; font: 30px; font-weight: bold;">${data.address}</p>`;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<p><img class="output" width="70" style = "border-radius: 80px;" /></p>`;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<a onClick="onEdit(this)" class="btn btn-primary" style = "padding: 10px; margin-bottom: 10px;">Edit</a>
                       <a onClick="onDelete(this)" class="btn btn-danger">Delete</a>`;
}

function resetForm() {

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.querySelector(".output").innerHTML = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstName").value = selectedRow.cells[0].textContent;
  document.getElementById("lastName").value = selectedRow.cells[1].textContent;
  document.getElementById("email").value = selectedRow.cells[2].textContent;
  document.getElementById("address").value = selectedRow.cells[3].textContent;
  //document.querySelector(".output").value = selectedRow.cells[4].src;
  //document.querySelector(".output").src = event.target.result;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstName;
  selectedRow.cells[1].innerHTML = formData.lastName;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.address;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("memberList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("firstName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
// var loadFile = function (event) {
//   debugger;
//   var image = document.getElementById("output");
//   var src = URL.createObjectURL(event.target.files[0]);
// };
