document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.classList.toggle("expanded"); // Toggle the expanded class
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.classList.remove("expanded"); // Remove expanded class when collapsing
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Set max-height based on content height
                this.classList.add("expanded"); // Add expanded class when expanding
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("click", function () {
            const modalId = img.dataset.modal;
            openModal(modalId, img);
        });
    });
});

function openModal(modalId, img) {
    const modal = document.getElementById(modalId);
    const modalImg = modal.querySelector(".modal-content");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('fade-out');
    setTimeout(function() {
        modal.style.display = "none";
        modal.classList.remove('fade-out'); // Remove fade-out class for next time
    }, 200); // Match this duration with the CSS animation duration
}

// Add event listeners for closing the modal
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const modalId = button.closest('.modal').id; // Get the modal ID
        closeModal(modalId);
    });
});

window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            closeModal(modal.id); // Call closeModal with the modal ID
        }
    });
});