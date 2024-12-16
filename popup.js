// Create the full-screen popup dynamically
const popupOverlay = document.createElement('div');
popupOverlay.style.position = 'fixed';
popupOverlay.style.top = '0';
popupOverlay.style.left = '0';
popupOverlay.style.width = '100vw'; // Full width
popupOverlay.style.height = '100vh'; // Full height
popupOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Transparent dark background
popupOverlay.style.backdropFilter = 'blur(8px)'; // Blurred effect
popupOverlay.style.display = 'flex';
popupOverlay.style.alignItems = 'center';
popupOverlay.style.justifyContent = 'center';
popupOverlay.style.zIndex = '100000'; // High z-index
popupOverlay.style.transition = 'opacity 0.3s ease-in-out';

// Create the notification box
const popupBox = document.createElement('div');
popupBox.style.backgroundColor = 'rgba(255, 255, 255, 0.21)'; // Transparent background
popupBox.style.backdropFilter = 'blur(10px)'; // Blur effect
popupBox.style.webkitBackdropFilter = 'blur(10px)'; // Safari support
popupBox.style.color = '#333';
popupBox.style.padding = '20px 5%'; // Responsive padding
popupBox.style.borderRadius = '12px';
popupBox.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.3)';
popupBox.style.textAlign = 'center';
popupBox.style.maxWidth = '80%'; // Responsive width
popupBox.style.width = '400px'; // Default width for larger screens
popupBox.style.height = '400px';
popupBox.style.maxHeight = '60%'; // Max height for responsiveness

// Add the notification icon (using Font Awesome or any other icon library)
const notificationIcon = document.createElement('i');
notificationIcon.classList.add('fas', 'fa-bell'); // Using FontAwesome bell icon
notificationIcon.style.fontSize = '50px'; // Large icon size
notificationIcon.style.color = 'gold'; // Icon color
notificationIcon.style.marginBottom = '20px'; // Space between icon and message

// Add the notification message
const popupMessage = document.createElement('h2');
popupMessage.innerHTML = '<h3 style="color: aqua;"> BCA 3rd Semester - Notes Update </h3> </br> Accounting Notes Is Now Live & </br> Computer Architecture Notes Is Live Now';
popupMessage.style.margin = '0';
popupMessage.style.fontSize = '20px';
popupMessage.style.color = '#222';
popupMessage.style.lineHeight = '1.5';
popupMessage.style.color = 'white';
popupBox.appendChild(notificationIcon); // Add the icon to the popup box
popupBox.appendChild(popupMessage); // Add the message to the popup box

// Add the close button
const closeButton = document.createElement('button');
closeButton.innerText = 'Close';
closeButton.style.marginTop = '20px';
closeButton.style.padding = '12px 20px';
closeButton.style.fontSize = '16px';
closeButton.style.color = '#fff';
closeButton.style.backgroundColor = '#007bff';
closeButton.style.border = 'none';
closeButton.style.borderRadius = '8px';
closeButton.style.cursor = 'pointer';
closeButton.style.transition = 'background-color 0.3s';
closeButton.addEventListener('mouseenter', () => (closeButton.style.backgroundColor = '#0056b3'));
closeButton.addEventListener('mouseleave', () => (closeButton.style.backgroundColor = '#007bff'));
closeButton.addEventListener('click', () => {
    popupOverlay.style.opacity = '0';
    setTimeout(() => popupOverlay.remove(), 300); // Remove popup after fade-out
});

// Add the close button to the notification box
popupBox.appendChild(closeButton);

// Add the notification box to the overlay
popupOverlay.appendChild(popupBox);

// Add the overlay to the document body
document.body.appendChild(popupOverlay);

// Automatically hide the popup after 5 seconds
setTimeout(() => {
    popupOverlay.style.opacity = '0';
    setTimeout(() => popupOverlay.remove(), 300); // Remove popup after fade-out
}, 5000);
