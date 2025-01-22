document.querySelectorAll('.buttons .neumorphic').forEach(button => {
    button.addEventListener('click', () => {
        let targetPage;
        switch (button.innerText.trim()) {
            case 'Home':
                targetPage = './html/home.html';
                break;
            case 'Doctor Consultant':
                targetPage = './html/doctor.html';
                break;
            case 'Emergency':
                targetPage = './html/emergency.html';
                break;
            case 'AI Chat':
                targetPage = './html/aichat.html';
                break;
            case 'Login':
                targetPage = './html/login.html';
                break;
            default:
                targetPage = 'index.html';
        }
        window.location.href = targetPage;
    });
});
