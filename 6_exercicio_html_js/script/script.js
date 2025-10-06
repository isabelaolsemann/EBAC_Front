const form = document.getElementById("form-container");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Captura os campos do formulário
    const fieldA = document.getElementById("field-a");
    const fieldB = document.getElementById("field-b");

    // Seleciona as mensagens uma única vez
    const containerMensagemSucesso = document.querySelector(".success-message");
    const containerMensagemErro = document.querySelector(".error-message");

    // Esconde ambas antes de decidir qual mostrar
    containerMensagemSucesso.style.display = "none";
    containerMensagemErro.style.display = "none";

    // Converte os valores para números
    const valorA = Number(fieldA.value);
    const valorB = Number(fieldB.value);

    // Mensagens
    const successMessage = `Sucesso! O valor de B (${valorB}) é maior que A (${valorA})`;
    const errorMessage = `Erro! O valor de B (${valorB}) deve ser maior que A (${valorA})`;

    // Validação
    if (valorB > valorA) {
        containerMensagemSucesso.innerHTML = successMessage;
        containerMensagemSucesso.style.display = "block";
        // Limpa os campos
        fieldA.value = "";
        fieldB.value = "";
    } else {
        containerMensagemErro.innerHTML = errorMessage;
        containerMensagemErro.style.display = "block";
        // Limpa os campos (opcional: você pode deixar para não limpar)
        fieldA.value = "";
        fieldB.value = "";
    }
});
