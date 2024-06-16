// script.js

document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const question = faq.querySelector('.faq-question');
        const answer = faq.querySelector('.faq-answer');
        const icon = faq.querySelector('.icon');

        question.addEventListener('click', () => {
            answer.classList.toggle('open');
            if (answer.classList.contains('open')) {
                icon.textContent = '-';
                console.log("if condition clicked");
            } else {
                icon.textContent = '+';
            }
        });
    });
});
