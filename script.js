  // Load the DOM before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Functionality for the "yesButton" to toggle "handOfGod" gif
  document.querySelector('.yesButton').addEventListener('click', function() {
    const buttonGif = document.querySelector('.tenor-gif-embed');
    buttonGif.hidden = !buttonGif.hidden;
  });
  // Functionality for the "amenButton" that goes BING!
  const btn = document.querySelector('.amenButton');
  btn.addEventListener('click', btnClick);
  function btnClick() {
    alert("I see you've brought the button that goes BING!");
  };
  // Functionality for the "submitDonorForm" button to toggle "organDonorGif" gif
  document.querySelector('.submitDonorForm').addEventListener('click', function() {
    const submitGif = document.querySelector('.organDonorGif img');
    submitGif.hidden = !submitGif.hidden;
  });
});