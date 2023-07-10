console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  
  // Change the console.log to an alert message
  alert('Form submitted successfully!');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

// Add event listener for mouseover
let picture = document.querySelector('img');

picture.addEventListener('mouseover', () => {
  // Provide a compliment in the alert message
  alert('You have excellent taste in pictures!');
});
