// Countdown function
function countdown(endDate) {
    const daysElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

        daysElement.innerHTML = `Days until exam: ${days}`;
    }

    // Initial call to update countdown
    updateCountdown();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
}

// Set the exam date (replace with your actual exam date)
const examDate = new Date('2024-06-01T00:00:00');
countdown(examDate);
