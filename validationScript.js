// JavaScript code for form validation
// Prevent form from submitting
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault()
    });

// Retrieve the input field value
var input = document.getElementById('inputField');
var inputValue = input.value;


// Regular expression pattern for alphanumeric input
let regex = /^[a-zA-Z0-9]*$/;

// Check if the input value matches the pattern
function validateInput(){
    // Valid input: display confirmation and submit the form
    if (regex.test(inputValue)){
        alert("Successful Submission!");
        document.forms.myForm.submit();
        }
    // Invalid input: display error message
    else if (!regex.test(inputValue)){ // I don't know why invalid input is not being checked
        alert("Invalid Input!");
        }
    }