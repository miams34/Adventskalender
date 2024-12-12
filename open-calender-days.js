document.addEventListener("DOMContentLoaded", function() {
    // Holen des aktuellen Datums
    const today = new Date();
    const todayDay = today.getDate(); // Gibt den Tag des Monats zurück (1 bis 31)
    const todayMonth = today.getMonth();

    // Alle Türchen holen
    const doors = document.querySelectorAll('.calender-door');

    // Durch jedes Türchen iterieren
    doors.forEach(door => {
        const dayNumber = parseInt(door.getAttribute('data-day-number')); // Tagnummer aus dem "data-tag" Attribut holen

        door.style.cursor = 'pointer'; // Zeige, dass man klicken kann

            // Klick-Event für Türchen
            door.addEventListener('click', function() {
                openCalenderDoor(dayNumber, todayDay, todayMonth, door);
            });

            door.addEventListener('touchend', function() {
                openCalenderDoor(dayNumber, todayDay, todayMonth, door);
            });
    });
});

function openCalenderDoor(dayNumber, todayDay, todayMonth, door) {
     // Türchen nur anzeigen, wenn der Tag kleiner oder gleich dem heutigen Tag ist
     if (dayNumber <= todayDay && todayMonth === 11) {
        // Zeige die Zahl
        const contentDiv = door.querySelector('.calender-content');
        const numberDiv = door.querySelector('.calender-number');

        // Wenn das Türchen noch nicht geöffnet ist, öffne es
        if (contentDiv.classList.contains('hidden')) {
            contentDiv.classList.remove('hidden');
            numberDiv.classList.add('hidden');
            return;
        }

        if (numberDiv.classList.contains('hidden')) {
            numberDiv.classList.remove('hidden');
            contentDiv.classList.add('hidden');
        }
        return;
    } 
    document.getElementById('popup').classList.remove('hidden');
}