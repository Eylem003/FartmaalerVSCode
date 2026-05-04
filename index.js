<<<<<<< HEAD
function goToMeasurement () {
=======
function goToStudent() {

    let codeInput = document.querySelector(".student-access input").value;

    if (codeInput.trim() === "") {
        alert("Indtast en kode først");
        return;
    }

>>>>>>> origin/main
    window.location.href = "elev.html";
}