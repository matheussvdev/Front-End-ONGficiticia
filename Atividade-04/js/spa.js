const conteudo = document.getElementById("conteudo");

// ===== FUNÇÕES DE MÁSCARA =====
function mascaraCPF(cpf) {
  cpf.value = cpf.value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function mascaraTelefone(telefone) {
  telefone.value = telefone.value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function mascaraCEP(cep) {
  cep.value = cep.value
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2");
}

// ===== SPA =====
function carregarPagina(pagina) {
  conteudo.classList.remove("mostrar");

  setTimeout(() => {
    let template = "";

    // HOME
    if (pagina === "home") {
      template = `
        <section class="hero">
          <div class="hero-content">
            <h2>Transformando vidas com solidariedade</h2>
            <p>Juntos construímos um futuro mais justo, com oportunidades para todos.</p>
            <button class="btn" data-page="projetos">Conheça nossos projetos</button>
          </div>
        </section>
      `;
    }

    // SOBRE
    if (pagina === "sobre") {
      template = `
        <section class="historico">
          <h2>Nossa História e Conquistas</h2>
          <p>Desde 2010, a ONG Atividade01 tem impactado positivamente milhares de pessoas com projetos voltados à educação, saúde e meio ambiente.</p>
          <ul>
            <li>+10.000 pessoas beneficiadas</li>
            <li>+150 voluntários ativos</li>
            <li>+50 projetos concluídos</li>
          </ul>
        </section>
      `;
    }

    // EQUIPE
    if (pagina === "equipe") {
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
    }

    // PROJETOS
    if (pagina === "projetos") {
      const projetos = [
        { nome: "Educação para Todos", descricao: "Oferece reforço escolar gratuito.", Image: "assets/Educacao-para-Todos.jpg" },
        { nome: "Verde Esperança", descricao: "Projeto de reflorestamento urbano.", Image: "assets/Alimentar-Esperanca.jpg" },
        { nome: "Mãos que Ajudam", descricao: "Campanhas de arrecadação de alimentos.", Image: "assets/verde-viver.jpg" },
      ];

      const cards = projetos.map(p => `
        <div class="card2">
          <img src="${p.Image}" alt="${p.nome}">
          <h3>${p.nome}</h3>
          <p>${p.descricao}</p>
        </div>
      `).join("");

      template = `
        <section class="mvv">
          <h2>Projetos em Andamento</h2>
          <div class="cards">${cards}</div>
        </section>
      `;
    }

    // CADASTRO
    if (pagina === "cadastro") {
      template = `
        <section class="cadastro">
          <h2>Cadastre-se como voluntário</h2>
          <form id="cadastroForm">
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
          </form>

          <h3>Voluntários cadastrados</h3>
          <button id="toggleTabela" class="btn">Mostrar/Esconder tabela</button>
          <table id="tabelaVoluntarios" border="1">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Data de Nascimento</th>
                <th>Endereço</th>
                <th>CEP</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </section>
      `;
    }

    // CONTATO
    if (pagina === "contato") {
      template = `
        <section class="contato">
          <h2>Entre em contato</h2>
          <p>Email: contato@atividade01.org</p>
          <p>Telefone: (11) 99999-9999</p>
        </section>
      `;
    }

    conteudo.innerHTML = template;

    // LINKS SPA
    document.querySelectorAll("[data-page]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const novaPagina = link.getAttribute("data-page");
        carregarPagina(novaPagina);
      });
    });

    // ===== CADASTRO / TABELA =====
    if (pagina === "cadastro") {
      const tabela = document.getElementById("tabelaVoluntarios");
      const btnToggle = document.getElementById("toggleTabela");

      // Inicialmente escondida
      tabela.style.display = "none";

      btnToggle.addEventListener("click", () => {
        if (tabela.style.display === "none") {
          tabela.style.display = "table";
          btnToggle.textContent = "Esconder tabela";
        } else {
          tabela.style.display = "none";
          btnToggle.textContent = "Mostrar tabela";
        }
      });

      const inputCPF = document.getElementById("cpf");
      const inputTelefone = document.getElementById("telefone");
      const inputCEP = document.getElementById("cep");

      inputCPF.addEventListener("input", () => mascaraCPF(inputCPF));
      inputTelefone.addEventListener("input", () => mascaraTelefone(inputTelefone));
      inputCEP.addEventListener("input", () => mascaraCEP(inputCEP));

      const voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];
      const form = document.getElementById("cadastroForm");
      const tbody = document.querySelector("#tabelaVoluntarios tbody");

      function atualizarTabela() {
        tbody.innerHTML = voluntarios.map((v, i) => `
          <tr>
            <td>${v.nome}</td>
            <td>${v.email}</td>
            <td>${v.cpf}</td>
            <td>${v.telefone}</td>
            <td>${v.dataNascimento}</td>
            <td>${v.endereco}</td>
            <td>${v.cep}</td>
            <td>${v.cidade}</td>
            <td>${v.estado}</td>
            <td><button data-index="${i}" class="btn-excluir">Excluir</button></td>
          </tr>
        `).join("");

        document.querySelectorAll(".btn-excluir").forEach(btn => {
          btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-index");
            voluntarios.splice(index, 1);
            localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
            atualizarTabela();
          });
        });
      }

      atualizarTabela();

      form.addEventListener("submit", e => {
        e.preventDefault();
        const dados = {
          nome: form.nome.value,
          email: form.email.value,
          cpf: form.cpf.value,
          telefone: form.telefone.value,
          dataNascimento: form.dataNascimento.value,
          endereco: form.endereco.value,
          cep: form.cep.value,
          cidade: form.cidade.value,
          estado: form.estado.value,
        };
        voluntarios.push(dados);
        localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
        atualizarTabela();
        form.reset();
      });
    }

    setTimeout(() => conteudo.classList.add("mostrar"), 50);
  }, 200);
}

// SPA - Links principais
document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const pagina = link.getAttribute("data-page");
    carregarPagina(pagina);
  });
});

// Carrega home
carregarPagina("home");

// ===== HAMBURGUER FIXO =====
const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementById("menu");

btnMobile.addEventListener("click", () => {
  menu.classList.toggle("active");
});
