document.querySelectorAll('section').forEach(section => {
  const slider = section.querySelector('.slider');
  const btnLeft = section.querySelector('.scroll-btn.left');
  const btnRight = section.querySelector('.scroll-btn.right');

  if (slider && btnLeft && btnRight) {
    btnLeft.addEventListener('click', () => {
      slider.scrollBy({ left: -340, behavior: 'smooth' });
    });
    btnRight.addEventListener('click', () => {
      slider.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }
});
