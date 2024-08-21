// Function to toggle the display of content with animation
function toggleContent(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('show')) {
        element.classList.remove('show');
    } else {
        element.classList.add('show');
    }
}

// Function to toggle the display of project details
function toggleProjectDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        element.classList.add('fadeInDetails');
    } else {
        element.style.display = "none";
        element.classList.remove('fadeInDetails');
    }
}

// Function to show the resume download form
function showResumeForm() {
    var form = document.getElementById('resume-form');
    form.style.display = 'block';
    form.classList.add('fadeInForm');
}

// Event listener for the resume form submission
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name && email) {
        // Assuming your resume file is in the same directory and named 'resume.pdf'
        var link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'resume.pdf';
        link.click();

        // Optionally, hide the form again after download
        var form = document.getElementById('resume-form');
        form.style.display = 'none';
    } else {
        alert('Please fill in both your name and email address to download the resume.');
    }
});

// Event listeners for project boxes (example for 3 projects)
document.getElementById('project1')?.addEventListener('click', function() {
    toggleProjectDetails('details1');
});

document.getElementById('project2')?.addEventListener('click', function() {
    toggleProjectDetails('details2');
});

document.getElementById('project3')?.addEventListener('click', function() {
    toggleProjectDetails('details3');
});

// Event listeners for the Academics and Certifications sections
document.querySelector('.academics h3')?.addEventListener('click', function() {
    toggleContent('academics-content');
});

document.querySelector('.certifications h3')?.addEventListener('click', function() {
    toggleContent('certifications-content');
});
