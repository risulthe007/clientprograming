const form = document.getElementById("question-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const question = document.getElementById("question").value.trim();
  let ok = true;

  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("question-error").textContent = "";
  document.getElementById("form-status").textContent = "";

  if (name === "") {
    document.getElementById("name-error").textContent = "Please enter your name.";
    ok = false;
  }

  if (email === "") {
    document.getElementById("email-error").textContent = "Please enter your email.";
    ok = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("email-error").textContent = "Please enter a valid email.";
    ok = false;
  }

  if (question === "") {
    document.getElementById("question-error").textContent = "Please write your question.";
    ok = false;
  } else if (question.length < 10) {
    document.getElementById("question-error").textContent = "Please write at least 10 characters.";
    ok = false;
  }

  if (ok) {
    document.getElementById("form-status").textContent = "Thank you! Your question is ready to be sent.";
    form.reset();
  } else {
    document.getElementById("form-status").textContent = "Please fix the errors above.";
  }
});