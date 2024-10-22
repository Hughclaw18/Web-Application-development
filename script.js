// Function to toggle the display of project details
function toggleProjectDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Function to show the resume download form
function showResumeForm() {
    const form = document.getElementById('resume-form');
    form.style.display = 'block';
    form.classList.add('fadeInForm');
}

// Event listener for the resume form submission
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Assuming your resume file is in the same directory and named 'resume.pdf'
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'resume.pdf';
        link.click();

        // Optionally, hide the form again after download
        const form = document.getElementById('resume-form');
        form.style.display = 'none';
    } else {
        alert('Please fill in both your name and email address to download the resume.');
    }
});

// Add event listeners to dynamically handle multiple project boxes
document.querySelectorAll('.project').forEach(function(project) {
    project.addEventListener('click', function() {
        const id = this.querySelector('.project-details').id;
        toggleProjectDetails(id);
    });
});

// Function to toggle the display of content with animation (for Academics and Certifications)
function toggleContent(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('show')) {
        element.classList.remove('show');
        element.style.maxHeight = null; // Collapse section
    } else {
        element.classList.add('show');
        element.style.maxHeight = element.scrollHeight + "px"; // Expand section
    }
}

// Event listeners for the Academics and Certifications sections (About Me page)
document.querySelector('.academics h3')?.addEventListener('click', function() {
    toggleContent('academics-content');
});

document.querySelector('.certifications h3')?.addEventListener('click', function() {
    toggleContent('certifications-content');
});
