const usuariosFixos = [
    { nome: "Caio Santos", email: "caio123@gmail.com", senha: "senha123456", saldo: 2500 },
    { nome: "Hugo Lima",   email: "hugo432@gmail.com", senha: "654321senha",  saldo: 1800 }
];

const emailInput  = document.getElementById("username");
const senhaInput  = document.getElementById("password");
const btnEntrar   = document.getElementById("login-button");
const mensagem    = document.getElementById("mensagem");
const toggleSenha = document.getElementById("toggle-senha");

toggleSenha.addEventListener("click", () => {
    const visivel = senhaInput.type === "text";
    senhaInput.type = visivel ? "password" : "text";
    toggleSenha.textContent = visivel ? "👁" : "🙈";
});

btnEntrar.addEventListener("click", entrar);

document.getElementById("login-form").addEventListener("keydown", (e) => {
    if (e.key === "Enter") entrar();
});

function entrar() {
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!email || !senha) {
        mostrarMensagem("Preencha todos os campos!", "orange");
        return;
    }

    const registrados = JSON.parse(localStorage.getItem("usuarios_cadastrados") || "[]");
    let usuario = registrados.find(u => u.email === email && u.senha === senha)
               || usuariosFixos.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        // Saldo salvo pelo banco tem prioridade sobre o saldo inicial do cadastro
        const saldoSalvo = localStorage.getItem(`saldo_${email}`);
        localStorage.setItem("nomeUsuario",  usuario.nome);
        localStorage.setItem("emailUsuario", email);
        localStorage.setItem("saldoUsuario", saldoSalvo !== null ? saldoSalvo : String(usuario.saldo));
        mostrarMensagem("Login realizado com sucesso!", "green");
        setTimeout(() => { window.location.href = "Banco.html"; }, 1000);
    } else {
        mostrarMensagem("E-mail ou senha incorretos!", "#c8102e");
    }
}

function mostrarMensagem(texto, cor) {
    mensagem.textContent = texto;
    mensagem.style.color = cor;
}
