// Shared immediate feedback for lesson quizzes. No answers are persisted.
document.querySelectorAll('[data-quiz]').forEach((form) => {
  const feedback = form.querySelector('[data-feedback]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const choice = form.querySelector('input:checked');
    if (!choice) {
      feedback.dataset.state = 'retry';
      feedback.textContent = 'Choose an answer, then check your reasoning.';
      return;
    }
    const correct = choice.value === form.dataset.answer;
    feedback.dataset.state = correct ? 'correct' : 'retry';
    feedback.textContent = correct ? form.dataset.correct : form.dataset.retry;
  });
});
