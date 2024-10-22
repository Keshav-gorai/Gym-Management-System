// Sample supplement details
const supplementDetails = {
    "whey-protein": {
        title: "Whey Protein",
        description: "Whey protein is a high-quality protein that contains all the essential amino acids. It's commonly used for muscle gain, post-workout recovery, and to support muscle repair."
    },
    creatine: {
        title: "Creatine",
        description: "Creatine increases muscle mass, strength, and exercise performance. It's commonly used by athletes and bodybuilders to boost performance during high-intensity workouts."
    },
    multivitamin: {
        title: "Multivitamin",
        description: "A multivitamin supplement helps to fill in nutritional gaps and ensure you're getting essential vitamins and minerals to support overall health and well-being."
    },
    bcaa: {
        title: "BCAA",
        description: "Branched-chain amino acids (BCAAs) support muscle recovery and reduce muscle fatigue. They're used pre or post-workout to improve recovery time."
    }
};

// Function to display supplement details in the modal
function showSupplementDetails(supplementKey) {
    const modal = document.getElementById("supplement-details");
    const title = document.getElementById("supplement-title");
    const description = document.getElementById("supplement-description");

    // Set modal content with the details of the selected supplement
    title.textContent = supplementDetails[supplementKey].title;
    description.textContent = supplementDetails[supplementKey].description;

    // Show the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeDetails() {
    const modal = document.getElementById("supplement-details");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("supplement-details");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
