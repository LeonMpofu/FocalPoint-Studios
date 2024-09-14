

document.addEventListener("DOMContentLoaded", function() {
    // Example: Toggle the dropdown menu on hover
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach(item => {
        item.addEvent

// Set the date and time for the sale to begin
const saleStartDate = new Date("Sep 23, 2024 09:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {

    // Get the current date and time
    const now = new Date("Sep 14, 2024").getTime("00.29");

    // Calculate the time remaining until the sale starts
    const timeRemaining = saleStartDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").style.display = "none";
        document.getElementById("sale-message").innerText = "The Sale has Started!";
    }

});
<script>
    document.getElementById('toggleSidebar').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block'; // Show sidebar
        } else {
            sidebar.style.display = 'none';  // Hide sidebar
        }
    });
</script>
