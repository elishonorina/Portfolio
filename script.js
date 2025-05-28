// Função do formulário
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Captura os valores dos campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Aqui você pode adicionar o código para enviar os dados
            console.log('Formulário enviado:', { name, email, message });
            
            // Exibe mensagem de sucesso
            alert('Mensagem enviada com sucesso!');
            
            // Limpa o formulário (opcional)
            this.reset();
        });

        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const el = entry.target;

            if (entry.isIntersecting) {
              el.classList.add('ativo');

              // Se NÃO for para repetir, para de observar após a primeira vez
              if (!el.classList.contains('repetir')) {
                observer.unobserve(el);
              }
            } else {
              // Só remove a classe se for um elemento que deve repetir
              if (el.classList.contains('repetir')) {
                el.classList.remove('ativo');
              }
            }
          });
        }, {
          threshold: 0.1 // porcentagem visível para ativar (ajuste se quiser)
        });

        // Elementos que animam só uma vez
        const elementosUnicos = document.querySelectorAll('.caixa, .caixao, .caixa_projetos, .texto');
        elementosUnicos.forEach(el => observer.observe(el));

        // Elemento que repete a animação (perfil)
        const perfil = document.querySelector('#perfil');
        if (perfil) {
            perfil.classList.add('repetir'); // adiciona a classe direto aqui
            observer.observe(perfil);
        }