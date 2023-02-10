const detailsForm = document.getElementById("details-form");
const nameInput = document.getElementById("name-input");
const studentIdInput = document.getElementById("student-id-input");
const signatureInput = document.getElementById("signature-input");
const signInButton = document.getElementById("sign-in-button");
const notInProgressText = document.getElementById("not-in-progress-text");

detailsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("student_id", studentIdInput.value);
  localStorage.setItem("signature", signatureInput.value);
});

signInButton.addEventListener("click", () => {
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: localStorage.getItem("name"),
      student_id: localStorage.getItem("student_id"),
      signature: localStorage.getItem("signature"),
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
