$(document).ready(function(){
    $("#carrossel-images").slick({
        autoplay:true
    });

    $("#menu-hamburger").click(function(){
        $("nav").slideToggle(); // corrigido
    });

    $("#telefone").mask("(00) 00000-0000", {
    placeholder: '(DDD) 12345-6789'
    });

    $("form").validate({
        rules: {
            name: {
                required: true
            },
            telefone: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            livro: {
                required: true
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });

    $(".book-content").on("click", function() {
        const titulo = $(this).find("h3").text(); // melhor pegar apenas o h3
        $("#livro").val(titulo);

        $("html, body").animate({
            scrollTop: $("form").offset().top - 100 // o "-100" deixa um espacinho acima
        }, 600); // 600 = velocidade (em ms)
    });

});