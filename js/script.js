function searchStudents() {
    // Get the input 
    let input = document.getElementById("searchStudents");

    // Get the search value
    let filter = input.value.toLowerCase();

    // Get the student table 
    let the table = document.getElementById("studentTable");

    // get all table rows
    let rows = table.getElementsByTagName("tr");

    // Loop throough the rows
    for (let i = 1; i < rows.length; i++) {

        let row = rows[i].textContent.toLowerCase();

        // Check if the row contains the search value
        if (row.includes(filter)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
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
)
}
)