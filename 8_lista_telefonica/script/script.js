const form = document.getElementById("form");
const inputName = document.getElementById("name-user");
const inputTel = document.getElementById("tel-user");
const button = document.getElementById("btn-submit");
const namesList = [];
const contactList = [];
let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
}); 

function adicionaLinha(){
    if(namesList.includes(inputName.value)) {
        alert(`O contato "${inputName.value}" já está cadastrado na sua agenda.`);
    } else {
        namesList.push(inputName.value);
        contactList.push(inputTel.value);

        let linha = "<tr>";
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += `</tr>`;

        linhas += linha;

        //aparecer a tabela
        if(namesList.length === 1){
            document.querySelector(".tabela-contatos").classList.add("ativo");
        }
    }

    inputName.value = "";
    inputTel.value = "";
}

function atualizaAgenda() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
