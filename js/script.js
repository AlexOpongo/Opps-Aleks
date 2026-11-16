// SEARCH STUDENT
function searchStudent() {
    let filter = document.getElementById("searchInputs").value.toLowerCase();
    let table = document.getElementById("studentTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let rows = tr[i].textContent.toLowerCase();
        if (rows.includes(filter)) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}



// REGISTER STUDENT
document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("studentForm");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("studentName").value;
        let reg = document.getElementById("registrationNumber").value;
        let id =  document.getElementById("studentId").value;
        let studentClass =  document.getElementById("className").value;
        let gender =  document.getElementById("gender").value;
        let phone =  document.getElementById("phone").value;

        let tbody =  document.getElementById("studentList");
        let tr =  document.createElement("tr");
        tr.innerHTML = "<td>" + id + "</td><td>" + reg + "</td><td>" + name + "</td><td>" + studentClass + "</td><td>" + gender + "</td><td>" + phone + "</td><td><button onclick='this.parentElement.parentElement.remove()'>Delete</button></td>";
        tbody.appendChild(tr);

        form.requestFullscreen();
        alert("Student Registered Successfully!");
    });
    });