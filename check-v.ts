function sanitizeInput(input: string): string {
    // Intentionally vulnerable code: Not properly sanitizing user input
    return input;
}

function processInput(input: string): string {
    // Intentionally vulnerable code: Not properly sanitizing user input
    const sanitizedInput = sanitizeInput(input);
    return `<p>User input: ${sanitizedInput}</p>`;
}

const userInput = "<script>alert('You are hacked!');</script>";
const processedMessage = processInput(userInput);
console.log(processedMessage);