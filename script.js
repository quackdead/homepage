const time_date = document.querySelector(".time-date");
const week_day = document.querySelector(".week-day");

function updateTime() {
    let now = new Date();

    // Format time & date
    let timeString = now.toLocaleTimeString(); // "12:34:56 PM"
    let dateString = now.toLocaleDateString(); // "3/25/2025" (format depends on locale)
    
    // Format day of the week
    let dayString = now.toLocaleDateString(undefined, { weekday: "long" }); // "Monday"

    // Update h1 elements
    time_date.textContent = `${dateString} - ${timeString}`;
    week_day.textContent = `Today is ${dayString}`;
}

// Run once and update every second
updateTime();
setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
    // Auto-focus on DuckDuckGo search input when the page loads
    document.querySelector(".duck .input").focus();

    document.querySelectorAll(".input").forEach(input => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                let query = input.value.trim(); // Get input value and remove spaces
                if (!query) return; // If empty, do nothing

                let searchURL = "";

                if (input.closest(".duck")) {
                    searchURL = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
                } else if (input.closest(".google")) {
                    searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                }

                if (searchURL) {
                    window.location.href = searchURL; // Open search in the same tab
                }

                input.value = ""; // Clear input after searching
            }
        });
    });
});