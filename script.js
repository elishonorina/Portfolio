const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    } else {
      entry.target.classList.remove('ativo'); // se quiser que suma ao sair
    }
  });
});

const texto = document.querySelector('.texto');
texto.classList.add('animar');
observer.observe(texto);