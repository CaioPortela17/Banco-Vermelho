// Usuários cadastrados
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

// Elementos da página
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btnEntrar = document.getElementById("btnEntrar");
const mensagem = document.getElementById("mensagem");

// Evento do botão
btnEntrar.addEventListener("click", entrar);

function entrar() {

    const emailDigitado = email.value.trim();
    const senhaDigitada = senha.value.trim();

    if (emailDigitado === "" || senhaDigitada === "") {
        mensagem.textContent = "Preencha todos os campos.";
        return;
    }

    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.email === emailDigitado &&
        usuario.senha === senhaDigitada
    );

    if (usuarioEncontrado) {
        mensagem.textContent = "Login realizado com sucesso!";

        // Redirecionar para outra página
        // window.location.href = "home.html";
    } else {
        mensagem.textContent = "E-mail ou senha incorretos.";
    }
}