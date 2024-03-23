document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let index = 0;
    const slideWidth = slides[0].clientWidth;

    function goToSlide(idx) {
        if (idx < 0) {
            index = slides.length - 1;
        } else if (idx >= slides.length) {
            index = 0;
        } else {
            index = idx;
        }
        slider.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    function nextSlide() {
        goToSlide(index + 1);
    }

    function prevSlide() {
        goToSlide(index - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 5000);
});
