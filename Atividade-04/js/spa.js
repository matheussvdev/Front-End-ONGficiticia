const conteudo = document.getElementById("conteudo");

// ===== SPA =====
function carregarPagina(pagina) {
  conteudo.classList.remove("mostrar");

  setTimeout(() => {
    let template = "";

    switch (pagina) {
      case "home":
        template = `
          <section class="hero">
            <div class="hero-content">
              <h2>Transformando vidas com solidariedade</h2>
              <p>Juntos construímos um futuro mais justo, com oportunidades para todos.</p>
              <button class="btn" data-page="projetos">Conheça nossos projetos</button>
            </div>
          </section>
        `;
        break;

        case "cadastro":
        template = `  <form id="cadastroForm">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" maxlength="14" required>

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" maxlength="15" required>

            <label for="dataNascimento">Data de Nascimento:</label>
            <input type="date" id="dataNascimento" name="dataNascimento" required>

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required>

            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" maxlength="9" required>

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required>

            <label for="estado">Estado:</label>
            <select id="estado" name="estado" required>
                <option value="">Selecione...</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
                <option value="RS">Rio Grande do Sul</option>
                 <option value="OUT">Outros</option>
            </select>

            <button type="submit">Cadastrar</button>
        </form>`
        break;

      case "sobre":
        template = `
          <section class="historico">
            <h2>Nossa História e Conquistas</h2>
            <p>Desde 2010, a ONG Atividade01 impacta positivamente milhares de pessoas.</p>
            <ul>
              <li>+10.000 pessoas beneficiadas</li>
              <li>+150 voluntários ativos</li>
              <li>+50 projetos concluídos</li>
            </ul>
          </section>
        `;
        break;

      case "equipe":
        template = `
          <section class="equipe">
            <h2>Nossa Equipe</h2>
            <div class="cards">
              <div class="card">
                <img src="assets/girl01.jpeg" alt="Coordenadora">
                <h3>Maria Silva</h3>
                <p>Coordenadora Geral</p>
              </div>
              <div class="card">
                <img src="assets/men.jpeg" alt="Gestor de Projetos">
                <h3>João Pereira</h3>
                <p>Gestor de Projetos</p>
              </div>
              <div class="card">
                <img src="assets/girl02.jpeg" alt="Comunicação">
                <h3>Carla Souza</h3>
                <p>Comunicação e Parcerias</p>
              </div>
            </div>
          </section>
        `;
        break;

      case "projetos":
        template = `
          <section class="mvv">
              
            <h2>Projetos em Andamento</h2>
            <div class="cards">
              <div class="card2">
               <img src="assets/Educacao-para-Todos.jpg" alt="Alunos estudando no projeto Educação para Todos">
                <h3>Educação para Todos</h3>
                <p>Oferece reforço escolar gratuito.</p>
              </div>
              <div class="card2">
                    <img src="assets/Alimentar-Esperanca.jpg"
                <h3>Verde Esperança</h3>
                <p>Projeto de reflorestamento urbano.</p>
              </div>
              <div class="card2">
               <img src="assets/verde-viver.jpg" alt="Crianças plantando árvores no projeto Verde Viver">
                <h3>Mãos que Ajudam</h3>
                <p>Campanhas de arrecadação de alimentos.</p>
              </div>
            </div>
          </section>
        `;
        break;

      case "contato":
        template = `
          <section class="contato">
            <h2>Entre em contato</h2>
            <p>Email: contato@atividade01.org</p>
            <p>Telefone: (11) 99999-9999</p>
          </section>
        `;
        break;
    }

    conteudo.innerHTML = template;

    // Reaplicar eventos dos links
    document.querySelectorAll("[data-page]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        carregarPagina(link.getAttribute("data-page"));
      });
    });

    setTimeout(() => conteudo.classList.add("mostrar"), 50);
  }, 100);
}

// Inicializa SPA
document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    carregarPagina(link.getAttribute("data-page"));
  });
});

// Carrega página inicial
carregarPagina("home");

// ===== HAMBURGUER =====
const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementById("menu");
btnMobile.addEventListener("click", () => menu.classList.toggle("active"));

// ===== MODO ESCURO =====
const btnTema = document.getElementById("btn-tema");
const temaSalvo = localStorage.getItem("tema");

function aplicarTema(tema) {
  document.body.classList.toggle("dark", tema === "dark");
  btnTema.textContent = tema === "dark" ? "☀️" : "🌙";
}

if (temaSalvo) aplicarTema(temaSalvo);
else if (window.matchMedia("(prefers-color-scheme: dark)").matches) aplicarTema("dark");

btnTema.addEventListener("click", () => {
  const novoTema = document.body.classList.contains("dark") ? "light" : "dark";
  aplicarTema(novoTema);
  localStorage.setItem("tema", novoTema);
});
