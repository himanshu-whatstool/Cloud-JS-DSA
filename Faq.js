
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });

});



// const plusIcon = 'bi bi-plus-circle';
// const minusIcon = 'bi bi-dash-circle';
