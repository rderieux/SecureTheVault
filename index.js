/* Pseudocode
Declare 4 variables, one string, and three equations using a unique arithmetic operator.
The string will be a message to alert the user of their task.
Finally use a html elements to display the final vault code
*/

//Message for the user
const userMessage =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//Addition operator variable
const additionVar = 1 + 1 + 2 + 6;

//Subtraction operator variable
const subtractionVar = 100 - 60;

//Multiplication operator variable
const multiplyVar = 19.5 * 2;

//select the html element for the user message
const userMessageH1 = document.getElementById("userMessage");

//Set the text content of the element for the user message
userMessageH1.textContent = userMessage;

//Create a string for the vault code
const vaultCode = `${additionVar} - ${subtractionVar} - ${multiplyVar}`;

//Select the html element for the vault code
const vaultCodeDiv = document.getElementById("vaultCode");

//Set the text content of the element for the vault code
vaultCodeDiv.textContent = vaultCode;
