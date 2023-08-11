function checkValidForm() {
    companyName = document.getElementById("companyName").value;
    contactName = document.getElementById("contactName").value;
    phoneNum = document.getElementById("phoneNum").value;
    sizing = document.getElementById("sizing").value;
    chairNum = document.getElementById("chairNum").value;

    if (companyName == "" || contactName == "" || phoneNum == "") {
        alert("Company Name, Contact Name, and Phone Number are required fields.");
    } else if (sizing == "") {
        alert("Booth's size is a required field.");
    } else if (chairNum < 1 || chairNum > 10) {
        alert("Chair number must be between 1 and 10.");
    } else {
        alert("Thank you for registering!");
    }
}