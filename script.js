// Function to toggle the display of content with animation
function toggleContent(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('show');
    }
}

// Function to toggle the display of project details
function toggleProjectDetails(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = element.style.display === "none" || element.style.display === "" ? "block" : "none";
        element.classList.toggle('fadeInDetails', element.style.display === "block");
    }
}

// Function to show the resume download form
function showResumeForm() {
    const form = document.getElementById('resume-form');
    if (form) {
        form.style.display = 'block';
        form.classList.add('fadeInForm');
    }
}

// Event listener for the resume form submission
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const link = document.createElement('a');
        link.href = 'PrajeetRagavRResume.pdf';
        link.download = 'PrajeetRagavRResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        document.getElementById('resume-form').style.display = 'none';
    } else {
        alert('Please fill in both your name and email address to download the resume.');
    }
});

// Adding event listeners for project boxes using a loop (assuming IDs follow a pattern)
for (let i = 1; i <= 3; i++) {
    document.getElementById(`project${i}`)?.addEventListener('click', function() {
        toggleProjectDetails(`details${i}`);
    });
}

// Event listeners for the Academics and Certifications sections
document.querySelector('.academics h3')?.addEventListener('click', function() {
    toggleContent('academics-content');
});

document.querySelector('.certifications h3')?.addEventListener('click', function() {
    toggleContent('certifications-content');
});
