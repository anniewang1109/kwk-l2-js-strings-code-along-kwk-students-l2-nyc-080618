// Write your code in this file!
const currentUser = 'Annie Wang';
 
const welcomeMessage = `Welcome to Klossybook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

const shortGreeting = `Welcome, ${currentUser.splice(0,1)}!`;