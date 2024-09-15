const resume = document.getElementById('Resume-generated') as HTMLDivElement;
const form = document.getElementById('resumeForm') as HTMLFormElement;
form.addEventListener("submit", (event:Event)=>{
    event.preventDefault();
    
const nameElement = (document.getElementById('name') as HTMLInputElement).value;
const emailElement = (document.getElementById('email') as HTMLInputElement).value; 
const phoneElement = (document.getElementById('phone') as HTMLInputElement).value;
const MatricElement = (document.getElementById('Matric')as HTMLInputElement).value;
const HSCElement = (document.getElementById('HSC')as HTMLInputElement).value;
const graduateElement = (document.getElementById('graduate')as HTMLInputElement).value;
const experienceElement = (document.getElementById('Experience') as HTMLInputElement).value;
const skillsElement = (document.getElementById('Skills') as HTMLInputElement).value;

// --Generated Resume
const resumeHTML = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${nameElement}</p>
<p><b>Email:</b>${emailElement}</p>
<p><b>Phone:</b>${phoneElement}</p>
<h3>Education</h3>
<p><b>Matriculation:</b>${MatricElement}</p>
<p><b>HSC:</b>${HSCElement}</p>
<p><b>Graduation:</b>${graduateElement}</p>

<h3>Experience</h3>
<p>${experienceElement}</p>

<h3>Skills</h3>
<p>${skillsElement}</p>
`;

// Display the generated resume
if( resume) {
    resume.innerHTML = resumeHTML;
    }else {
    console.error('The resume display element is missing.');
    }

})