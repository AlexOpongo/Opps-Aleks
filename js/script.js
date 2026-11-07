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
        if (rowtext.includes(filter)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}