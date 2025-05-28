document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Formulário de contato ---------- */
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const name    = form.querySelector('#name').value.trim();
      const email   = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      console.log('Formulário enviado:', { name, email, message });

      alert('Mensagem enviada com sucesso!');
      form.reset();
    });
  }

  /* ---------- Intersection Observer ---------- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        el.classList.add('ativo');

        // Se não for para repetir, para de observar
        if (!el.classList.contains('repetir')) {
          observer.unobserve(el);
        }
      } else {
        // Se for elemento com repetição, remove classe quando sai
        if (el.classList.contains('repetir')) {
          el.classList.remove('ativo');
        }
      }
    });
  }, {
    threshold: 0.1
  });

  // Elementos que animam só uma vez
  const elementosUnicos = document.querySelectorAll(
    '.conteudo_contato, .caixa, .caixao, .caixa_projetos, .texto'
  );
  elementosUnicos.forEach(el => observer.observe(el));

  // Elemento que repete a animação (perfil)
  const perfil = document.querySelector('#perfil');
  if (perfil) {
    perfil.classList.add('repetir');
    observer.observe(perfil);
  }

});