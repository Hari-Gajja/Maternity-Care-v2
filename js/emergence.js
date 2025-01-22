async function handleEmergency() {
    try {
        // Get the user's geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;

                // Get user details from localStorage (assuming the user is already logged in)
                const email = localStorage.getItem('email'); // or wherever you store user email
                const name = localStorage.getItem('name'); // or wherever you store user name

                if (!email || !name) {
                    alert('User is not logged in.');
                    return;
                }

                // Make a request to the server
                const response = await fetch('http://localhost:3000/emergency', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        location: {
                            latitude,
                            longitude
                        }
                    })
                });
                
                const data = await response.json();
                alert(data.message);
            }, (error) => {
                alert('Error getting location: ' + error.message);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending the emergency alert. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    function handleEmergency() {
        const numbers = ['108', '08460199334'];
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const numberToDial = numbers[randomIndex];
        
        // Open dial pad with the number
        window.location.href = `tel:${numberToDial}`;
    }

    const emergencyButton = document.querySelector('button[onclick="handleEmergency()"]');
    emergencyButton.addEventListener('click', handleEmergency);
});
