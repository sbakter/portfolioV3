// Form Validation for Contact Form
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.querySelector('input[name="cf_name"]').value;
    const email = document.querySelector('input[name="cf_email"]').value;
    const message = document.querySelector('textarea[name="cf_message"]').value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // If validation passes, display a success message
    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);

    // Clear the form after submission
    document.getElementById('form').reset();
});

// Mobile Navigation Menu Toggle
const navMenu = document.querySelector('nav ul');
const toggleNav = document.querySelector('button[aria-label="Toggle navigation menu"]');

toggleNav.addEventListener('click', function () {
    navMenu.classList.toggle('active'); // Toggle the visibility of the navigation menu
});

// Smooth Scroll for Internal Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump-to behavior
        const target = document.querySelector(this.getAttribute('href')); // Get the target section
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smoothly scroll to the target section
        }
    });
});

// Gallery Lightbox Effect (Optional Additional Feature)
const galleryImages = document.querySelectorAll('#gallery img');
if (galleryImages.length > 0) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = '1000';
    lightbox.style.display = 'none';
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;
            lightboxImg.style.maxWidth = '90%';
            lightboxImg.style.maxHeight = '90%';
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(lightboxImg);
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}
