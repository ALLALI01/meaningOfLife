const btn = window.document.querySelector<button>('yesButton'); // Get the button element
btn[0].addEventListener('click', btnClick); // Add event listener to the button
function btnClick() { // Function to run when the button is clicked
  alert('You are correct!');
};