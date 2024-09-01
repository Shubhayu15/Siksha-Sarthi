function getBotResponse(input) {
    // Convert input to lowercase for case-insensitive matching
    input = input.toLowerCase();

    // New condition for "how to use you?"
    if (input === "how to use you?") {
        return "Type /help";
    }

    // Rock paper scissors game logic
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there! How can I help you today?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "hello sarthi") {
        return "Hello User! How can i be of your assistance?";
    } else if (input == "/help") {
        return "I'm here to assist you with any questions you have about our services or website. What would you like to know?";
    } else if (input.includes("website")) {
        return "Our website offers a range of services and information. You can explore our products, learn more about our company, and find contact information.";
    } else if (input.includes("customer care")) {
        return "Our customer care team is here to help you 24/7. You can reach out via our support page, email, or phone number listed on the website.";
    } else if (input.includes("features")) {
        return "Our platform offers a variety of features including real-time chat support, a user-friendly interface, and comprehensive product information. Would you like to know more about a specific feature?";
    } else {
        return "Try asking something else!";
    }
}