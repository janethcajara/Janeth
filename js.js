function requestAppointment() {
    // Get form values
    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('ownerName').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let preferredDate = document.getElementById('preferredDate').value;
    
    // Validate form fields
    if (petName === '' || ownerName === '' || contactNumber === '' || preferredDate === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Send appointment request to server (you can customize this part based on your backend setup)
    // For example, you can use AJAX to send this data to a server-side script that handles the appointment requests
    
    // Display confirmation message
    alert('Appointment request submitted successfully! We will contact you shortly.');
}