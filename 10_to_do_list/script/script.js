//Espere o HTML carregar totalmente antes de executar o meu código.
$(document).ready(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();

        const tarefa = $("input").val();

        //Criar a tarefa:
        const novaTarefa = $(`
            <div class="new-to-do">
                <div class="result-itens">
                    <div class="iten">
                        <button class="check">
                            <i class="fa-regular fa-circle"></i>
                        </button>
                        
                        <ul>
                            <li>
                                ${tarefa}           
                            </li>
                        </ul>
                    </div>
                    <button class="delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                <hr>
            </div>
        `);

        //Add na div resultado:
        $(".result").append(novaTarefa);

        //Limpar o campo:
        $("input").val("");

        //Botão concluir atividade, muda o icone:
        novaTarefa.find(".check").click(function(){
            $(this).find("i").toggleClass("fa-regular fa-circle fa-solid fa-circle-check");
            $(this).closest(".result-itens").find("li").toggleClass("concluida");
        });

        //Deletar:
        novaTarefa.find(".delete").click(function(){
            $(this).closest(".new-to-do").fadeOut(300, function(){
                $(this).remove();
            });
        });
    });

})