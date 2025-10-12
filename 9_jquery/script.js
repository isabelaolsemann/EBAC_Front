//1. $(document).ready(function() { ... }) - acontece quando o HTML já for carregado
$(document).ready(function(){
    //seleciona qualquer button ou header da página 
    $("header button").click(function(){
        //slideDown() → faz o elemento (no caso, o <form>) aparecer de cima para baixo
        $("form").slideDown();
    });

    $("#cancel").click(function(){
        //slideUp() → faz o formulário sumir com animação para cima.
        $("form").slideUp();
    });

    //Impede o form ser enviado e recarregado - e.prevent...
    $("form").on("submit", function(e){
        e.preventDefault();

        const enderecoImagemNova = $("endereco-imagem-nova").val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagemNova}">`).appendTo(novoItem);
        $(`<div> class="overlay-imagem-link">
                <a href="${enderecoImagemNova}" title="Ver imagem de tamanho real" target="_blank">
                    Ver imagem em tamanho real.
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(1000);
        $("endereco-imagem-nova").val("");
    })
})