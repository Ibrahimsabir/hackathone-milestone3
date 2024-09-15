// // listing element
//  document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();
//type assertion
var resume = document.getElementById('Resume-generated');
var form = document.getElementById('resumeForm');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name').value;
    var emailElement = document.getElementById('email').value;
    var phoneElement = document.getElementById('phone').value;
    var MatricElement = document.getElementById('Matric').value;
    var HSCElement = document.getElementById('HSC').value;
    var graduateElement = document.getElementById('graduate').value;
    var experienceElement = document.getElementById('experience').value;
    var skillsElement = document.getElementById('skills').value;
    // --Generated Resume
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(nameElement, "</p>\n<p><b>Email:</b>").concat(emailElement, "</p>\n<p><b>Phone:</b>").concat(phoneElement, "</p>\n<h3>Education</h3>\n<p><b>Matriculation:</b>").concat(MatricElement, "</p>\n<p><b>HSC:</b>").concat(HSCElement, "</p>\n<p><b>Graduation:</b>").concat(graduateElement, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experienceElement, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skillsElement, "</p>\n");
    // Display the generated resume
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
