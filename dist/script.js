document.addEventListener("DOMContentLoaded", () => {
    const outputContainer = document.getElementById("api-output");

    // Make POST request to /bfhl endpoint
    fetch("/bfhl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: [1, 2, 3, "a", "b", "c"] })
    })
        .then(response => response.json())
        .then(data => {
            // Process the response data
            outputContainer.innerHTML += `<p>${JSON.stringify(data)}</p>`;
        })
        .catch(error => {
            console.error("Error fetching /bfhl (POST):", error);
        });

    // Make GET request to /bfhl endpoint
    fetch("/bfhl")
        .then(response => response.json())
        .then(data => {
            // Process the response data
            outputContainer.innerHTML += `<p>${JSON.stringify(data)}</p>`;
        })
        .catch(error => {
            console.error("Error fetching /bfhl (GET):", error);
        });

    // Add more fetch requests for other API endpoints as needed
});
