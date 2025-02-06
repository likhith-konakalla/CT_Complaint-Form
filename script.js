// Function to validate phone number
function validatePhoneNumber() {
  const phoneNumberInput = document.getElementById('phoneNumber');
  const phoneErrorSpan = document.getElementById('phoneError');
  const phoneRegex = /^[0-9]{10}$/; // Ensure 10-digit phone number

  if (!phoneRegex.test(phoneNumberInput.value.trim())) {
    phoneErrorSpan.textContent = "Invalid phone number. Please enter a 10-digit number.";
  } else {
    phoneErrorSpan.textContent = "";
  }
}

// Add blur and input event listeners to phone number field
document.getElementById('phoneNumber').addEventListener('input', validatePhoneNumber);
document.getElementById('phoneNumber').addEventListener('blur', validatePhoneNumber);

// Form submission logic
document.getElementById('complaintForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const idNumber = document.getElementById('idNumber').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const email = document.getElementById('email').value.trim();
  const query = document.getElementById('query').value.trim();

  if (!firstName || !idNumber || !phoneNumber || !email || !query) {
    alert("All fields except Supporting Documents are mandatory!");
    return;
  }

  // Validate phone number again before submission
const cleanedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters

const phoneRegex = /^[0-9]{10}$/;
if (!phoneRegex.test(cleanedPhoneNumber)) {
  alert("Please enter a valid 10-digit phone number.");
  return;
}

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Generate token number
  const tokenNumber = "TOKEN-" + Math.floor(Math.random() * 1000000);

  // Display success message
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = `Complaint submitted successfully! Your reference token number is: ${tokenNumber}`;
  messageDiv.style.color = "green";
  document.getElementById('complaintForm').reset(); // Reset form after submission
});
