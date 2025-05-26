const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    } else {
      entry.target.classList.remove('ativo'); // só se quiser que suma ao sair
    }
  });
});

const texto = document.querySelector('.texto');
observer.observe(texto);
const perfil = document.querySelector('#perfil');
observer.observe(perfil);
const elementos = document.querySelectorAll('.caixa, .caixao');
elementos.forEach(el => observer.observe(el));