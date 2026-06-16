const usuarios = [
    {
        email: "caio123@gmail.com",
        senha: "senha123456"
    },
    {
        email: "hugo432@gmail.com",
        senha: "654321senha"
    }
];

const email = document.getElementById("username");
const senha = document.getElementById("password");
const btnEntrar = document.getElementById("login-button");
const mensagem = document.getElementById("mensagem");
const nome = document.getElementById("nome");
const saldo = document.getElementById("saldo");

btnEntrar.addEventListener("click", entrar);

function entrar() {

    const emailDigitado = email.value.trim();
    const senhaDigitada = senha.value.trim();

    if (emailDigitado === "" || senhaDigitada === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "orange";
        return;
    }

    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.email === emailDigitado &&
        usuario.senha === senhaDigitada
    );

    if (usuarioEncontrado) {

    localStorage.setItem("nomeUsuario", nome.value);
    localStorage.setItem("saldoUsuario", saldo.value);

    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "green";

    setTimeout(() => {
        window.location.href = "banco.html";
    }, 1000);

    if (usuarioEncontrado) {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";

        setTimeout(() => {
            window.location.href = "Banco.html";
        }, 1000);

    } else {
        mensagem.textContent = "E-mail ou senha incorretos!";
        mensagem.style.color = "red";
    }
}}