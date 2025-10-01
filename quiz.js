function checkAnswer() {
  // Step 1: Define the correct answer
  const correctAnswer = "4";

  // Step 2: Get the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Step 3: Get the feedback element
  const feedback = document.getElementById("feedback");

  // Step 4: Check if an option was selected
  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "#dc3545"; // red
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 5: Compare answers and show feedback
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745"; // green
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545"; // red
  }
}

// Step 6: Attach the function to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
