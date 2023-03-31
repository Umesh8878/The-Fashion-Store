const faqSelect = document.querySelector('#faq-select');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqSelect.addEventListener('change', () => {
  const selectedQuestion = faqSelect.value;
  faqAnswers.forEach(answer => {
    if (answer.id === selectedQuestion) {
      answer.classList.add('active');
    } else {
      answer.classList.remove('active');
    }
  });
});
