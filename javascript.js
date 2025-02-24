// Sample data for tutors
const tutors = [
    { name: "John Doe", subject: "Mathematics" },
    { name: "Jane Smith", subject: "Physics" },
    { name: "Emily Johnson", subject: "Chemistry" },
    { name: "Michael Brown", subject: "Biology" },
    { name: "Sarah Davis", subject: "English" }
];

// Function to display tutors
function displayTutors(tutorList) {
    const tutorContainer = document.getElementById("tutorContainer");
    tutorContainer.innerHTML = "";

    tutorList.forEach(tutor => {
        let li = document.createElement("li");
        li.textContent = `${tutor.name} - ${tutor.subject}`;
        tutorContainer.appendChild(li);
    });
}

// Function to search tutors
function searchTutor() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredTutors = tutors.filter(tutor =>
        tutor.name.toLowerCase().includes(searchInput) ||
        tutor.subject.toLowerCase().includes(searchInput)
    );

    displayTutors(filteredTutors);
}

// Display all tutors by default
displayTutors(tutors);
