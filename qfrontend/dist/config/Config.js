const config = {
   // development: "http://3.109.200.6/:8080", // Backend URL for local testing
    production: "/api"

};

// Automatically choose the correct environment
const apiBaseURL = window.location.hostname === "http://52.14.80.35:8080/api/";  

// Expose the API URL globally
window.apiBaseURL = apiBaseURL;
