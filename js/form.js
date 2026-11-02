const form = document.getElementById("question-form");
const statusBox = document.getElementById("form-status");

function showError(id, message) {
  document.getElementById(id + "-error").textContent = message;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const question = document.getElementById("question").value.trim();
  let ok = true;

  showError("name", "");
  showError("email", "");
  showError("question", "");
  statusBox.textContent = "";

  if (name === "") {
    showError("name", "Please enter your name.");
    ok = false;
  }
    if (email === "") {
     showError("email", "Please enter your email address.");
     ok = false;
   } else if (!/^\S+@\S+\.\S+$/.test(email)) {
     showError("email", "Please enter a valid email address, like name@example.com.");
     ok = false;
   }
  }
  if (question === "") {
    showError("question", "Please write your question.");
    ok = false;
  }

  if (!ok) {
    statusBox.textContent = "Please fix the errors above.";
  }
});