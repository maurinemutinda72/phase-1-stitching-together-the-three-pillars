/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// Step 1: Select all heart elements
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Mock server communication
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2; // Simulate random failure
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300); // Simulate network delay
  });
}

// Step 3: Add event listeners to toggle heart state
articleHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.classList.contains("activated-heart")) {
          heart.textContent = "♡"; // Revert to empty heart
          heart.classList.remove("activated-heart");
        } else {
          heart.textContent = "♥"; // Fill the heart
          heart.classList.add("activated-heart");
        }
      })
      .catch((error) => {
        alert("Server Error: " + error); // Display server error
      });
  });
});
