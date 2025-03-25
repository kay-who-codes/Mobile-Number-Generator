document.addEventListener('DOMContentLoaded', function() {
    const phoneDisplay = document.getElementById('phoneNumber');
    const generateBtn = document.getElementById('generateBtn');
    const callBtn = document.getElementById('callBtn');
    
    // Generate a random UK mobile number (+44 7XXX XXX XXX)
    function generatePhoneNumber() {
        // Generate 9 random digits after the 7
        const randomDigits = Array.from({length: 9}, () => 
            Math.floor(Math.random() * 10)).join('');
        
        // Format as +44 7XXX XXX XXX
        const formattedNumber = `+44 7${randomDigits.substring(0, 3)} ${randomDigits.substring(3, 6)} ${randomDigits.substring(6)}`;
        return formattedNumber;
    }
    
    // Update the phone number display
    function updatePhoneNumber() {
        const newNumber = generatePhoneNumber();
        phoneDisplay.textContent = newNumber;
        
        // Update the call button href (proper format for tel: links)
        const dialableNumber = newNumber.replace(/\s/g, ''); // Remove all spaces
        callBtn.href = `tel:${dialableNumber}`;
    }
    
    // Initial generation
    updatePhoneNumber();
    
    // Event listeners
    generateBtn.addEventListener('click', updatePhoneNumber);
    
    // Call button confirmation - modified to prevent default behavior issues
    callBtn.addEventListener('click', function(e) {
        if (!confirm(`Call ${phoneDisplay.textContent}?`)) {
            e.preventDefault();
        }
        // Allow default behavior if confirmed
    });
});