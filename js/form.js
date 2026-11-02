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

  // clear old messages
  showError("name", "");
  showError("email", "");
  showError("question", "");
  statusBox.textContent = "";

  // check name
  if (name === "") {
    showError("name", "Please enter your name.");
    ok = false;
  }

  // check email
  if (email === "") {
    showError("email", "Please enter your email address.");
    ok = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    showError("email", "Please enter a valid email, like name@example.com.");
    ok = false;
  }

  // check question
  if (question === "") {
    showError("question", "Please write your question.");
    ok = false;
  } else if (question.length < 10) {
    showError("question", "Please write at least 10 characters.");
    ok = false;
  }

  // show result
  if (ok) {
    statusBox.textContent = "Thank you! Your question is ready to be sent.";
    form.reset();
  } else {
    statusBox.textContent = "Please fix the errors above.";
  }
});