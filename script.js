const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('ativo'));
    link.classList.add('ativo');
  });
});

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('ativo');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('ativo');
    }
  });
});