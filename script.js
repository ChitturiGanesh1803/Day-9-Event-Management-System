document.addEventListener('DOMContentLoaded', function () {
    const addEventForm = document.getElementById('addEventForm');
    const eventListing = document.querySelector('.event-listing');

    addEventForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        // Create new event card
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;

        // Append event card to event listing
        eventListing.appendChild(eventCard);

        // Reset form
        addEventForm.reset();
    });
});
