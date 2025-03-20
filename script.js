document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.yesButton').addEventListener('click', function() {
    const buttonGif = document.querySelector('.tenor-gif-embed');
    buttonGif.hidden = !buttonGif.hidden;
  });
  const btn = document.querySelector('.amenButton');
  btn.addEventListener('click', btnClick);
  function btnClick() {
    alert("I see you've brought the button that goes BING!");
  };
  document.querySelector('.submitDonorForm').addEventListener('click', function() {
    const submitGif = document.querySelector('.organDonorGif');
    submitGif.hidden = !submitGif.hidden;
  });
});