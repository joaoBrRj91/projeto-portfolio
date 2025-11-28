// Seleciona o formulário
const contactForm = document.getElementById("contato");

// Adiciona evento de envio do formulário
contactForm.addEventListener("submit", function (event) {
  // Previne o comportamento padrão de envio do formulário
  event.preventDefault();

  // Obtém os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Variável para controlar se há erros
  let temErro = false;

  // Validação do campo Nome
  if (nome === "") {
    alert("Por favor, preencha seu nome.");
    temErro = true;
  } else if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
    temErro = true;
  }

  // Validação do campo E-mail
  if (email === "") {
    alert("Por favor, preencha seu e-mail.");
    temErro = true;
  } else if (!validarEmail(email)) {
    alert(
      "email-error",
      "Por favor, insira um e-mail válido (exemplo: usuario@dominio.com)."
    );
    temErro = true;
  }

  // Validação do campo Mensagem
  if (mensagem === "") {
    alert("Por favor, escreva uma mensagem.");
    temErro = true;
  } else if (mensagem.length < 10) {
    alert("A mensagem deve ter pelo menos 10 caracteres.");
    temErro = true;
  }

  // Se não houver erros, envia a mensagem (simulado aqui com um alerta)
  if (temErro === false) {
    limparCampos();
    alert("Mensagem enviada com sucesso!");
    return;
  }
});

// Função para validar formato de e-mail
function validarEmail(email) {
  // Expressão regular para validar e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para limpar todas as mensagens de erro
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";
}
