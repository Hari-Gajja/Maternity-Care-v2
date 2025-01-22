document.addEventListener('DOMContentLoaded', (event) => {
    const doctors = [
        {
            name: "Dr. Nicholita Smith",
            field: "Obstetrics & Gynecology",
            rating: "★★★★★",
            hospital: "City Hospital",
            imgSrc: "https://images.pexels.com/photos/15752232/pexels-photo-15752232/free-photo-of-portrait-of-doctor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Dr. Elzibeth Doe",
            field: "Pediatrics",
            rating: "★★★★☆",
            hospital: "Green Valley Clinic",
            imgSrc: "https://images.pexels.com/photos/5234482/pexels-photo-5234482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Dr. Emily Johnson",
            field: "Neonatology",
            rating: "★★★★★",
            hospital: "Sunshine Medical Center",
            imgSrc: "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Dr.Sophia Williams",
            field: "Obstetrics & Gynecology",
            rating: "★★★★★",
            hospital: "Harmony Health Center",
            imgSrc: "https://images.pexels.com/photos/6010796/pexels-photo-6010796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Dr. Ava Martinez",
            field: "Obstetrics",
            rating: "★★★★★",
            hospital: "City Hospital",
            imgSrc: "https://images.pexels.com/photos/5207098/pexels-photo-5207098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Dr. Mia Brown",
            field: "Gynecology",
            rating: "★★★★★",
            hospital: "Morning Bird Medical Center",
            imgSrc: "https://images.pexels.com/photos/7904471/pexels-photo-7904471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Dr. Mia Johnson",
            field: "Neonatology",
            rating: "★★★★★",
            hospital: "Sophia Hospitals",
            imgSrc: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        // Add more doctors as needed
    ];

    const container = document.getElementById('doctor-container');

    doctors.forEach(doctor => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="imgBx">
                <img src="${doctor.imgSrc}" alt="Doctor Image">
            </div>
            <div class="contentBx">
                <h2>${doctor.name}</h2>
                <p>Field: ${doctor.field}</p>
                <p>Rating: ${doctor.rating}</p>
                <p>Working Hospital: ${doctor.hospital}</p>
            </div>
        `;

        container.appendChild(card);
    });
});

