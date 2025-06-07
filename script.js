
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.testimonial-grid');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const totalTestimonialCards = testimonialCards.length;

    function updateSlider() {
        const offset = -currentIndex * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalTestimonialCards;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalTestimonialCards) % totalTestimonialCards;
        updateSlider();
    });

    updateSlider(); // Initialize position
})
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active class for styling the button
    button.classList.toggle('active');

    // The answer div is the next sibling after the button's parent (faq-quiz) or you can structure to be the next sibling of button itself
    // Since your .faq-ans is a sibling of .faq-quiz, but button is inside faq-quiz, we can do:

    let faqQuizDiv = button.parentElement; 
    let faqAns = faqQuizDiv.nextElementSibling;

    if (faqAns && faqAns.classList.contains('faq-ans')) {
      if (faqAns.style.display === 'block') {
        faqAns.style.display = 'none';
      } else {
        faqAns.style.display = 'block';
      }
    }
  });
});
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active class for styling the button
    button.classList.toggle('active');

    // The answer div is the next sibling after the button's parent (faq-quiz) or you can structure to be the next sibling of button itself
    // Since your .faq-ans is a sibling of .faq-quiz, but button is inside faq-quiz, we can do:

    let faqQuizDiv = button.parentElement; 
    let faqAns = faqQuizDiv.nextElementSibling;

    if (faqAns && faqAns.classList.contains('faq-ans')) {
      if (faqAns.style.display === 'block') {
        faqAns.style.display = 'none';
      } else {
        faqAns.style.display = 'block';
      }
    }
  });
});
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active class for styling the button
    button.classList.toggle('active');

    // The answer div is the next sibling after the button's parent (faq-quiz) or you can structure to be the next sibling of button itself
    // Since your .faq-ans is a sibling of .faq-quiz, but button is inside faq-quiz, we can do:

    let faqQuizDiv = button.parentElement; 
    let faqAns = faqQuizDiv.nextElementSibling;

    if (faqAns && faqAns.classList.contains('faq-ans')) {
      if (faqAns.style.display === 'block') {
        faqAns.style.display = 'none';
      } else {
        faqAns.style.display = 'block';
      }
    }
  });
});
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active class for styling the button
    button.classList.toggle('active');

    // The answer div is the next sibling after the button's parent (faq-quiz) or you can structure to be the next sibling of button itself
    // Since your .faq-ans is a sibling of .faq-quiz, but button is inside faq-quiz, we can do:

    let faqQuizDiv = button.parentElement; 
    let faqAns = faqQuizDiv.nextElementSibling;

    if (faqAns && faqAns.classList.contains('faq-ans')) {
      if (faqAns.style.display === 'block') {
        faqAns.style.display = 'none';
      } else {
        faqAns.style.display = 'block';
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const answer = button.parentElement.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});

