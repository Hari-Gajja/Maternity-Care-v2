document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.querySelector('.login-form .red');
    
    const users = {
        'Madhuri': 'madhuri@123',
        'Sameera': 'sameera@456',
        'Keerthi': 'keerthi@789',
        'Nainika':'nainika@22',
        'Vedhasree':'vedha@22'
        // Add more users and passwords as needed
    };
    
    loginButton.addEventListener('click', () => {
        const username = document.querySelector('input[name="name"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        if(users[username] && users[username] === password) {
            alert('Login successful!');
            window.location.href = 'home.html'; // Redirect to a dashboard page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const maternityCareTitle = document.querySelector('.form-title h1:first-of-type');
    
    maternityCareTitle.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});
