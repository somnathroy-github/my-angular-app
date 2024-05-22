function processInput(input: string): string {
    // Intentionally vulnerable code: Not properly sanitizing user input
    return `<p>User input: ${input}</p>`;
}

const userInput = "<script>alert('You are hacked!');</script>";
const processedMessage = processInput(userInput);
console.log(processedMessage);