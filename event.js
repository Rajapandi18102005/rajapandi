function openBooking(eventName) {
    document.getElementById("eventTitle").innerText = "Book: " + eventName;
    document.getElementById("bookingModal").style.display = "flex";
}

function closeBooking() {
    document.getElementById("bookingModal").style.display = "none";
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("🎉 Booking Confirmed!\nName: " + document.getElementById("name").value);
    closeBooking();
});
