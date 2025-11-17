// Funções Auxiliares

// Função para gerar um código Hexadecimal aleatório
function gerarCorHexAleatoria() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
}

// Lógica Principal de Geração

function gerarPaleta() {
    var boxes = document.querySelectorAll('.box-cor');

    boxes.forEach(function(box, index) {
        var corHex = gerarCorHexAleatoria(); 
        box.style.backgroundColor = corHex;

        // O código agora sempre define o formato como Hex
        var codigoCor = corHex.toUpperCase();
        
        box.innerHTML = codigoCor;
        
        // Ajusta a cor do texto para contraste (preto ou branco)
        var hexValue = parseInt(corHex.slice(1), 16);
        var r = (hexValue >> 16) & 255;
        var g = (hexValue >> 8) & 255;
        var b = hexValue & 255;
        var luminance = (r * 0.299 + g * 0.587 + b * 0.114);
        box.style.color = (luminance > 186) ? '#333' : '#fff';
    });
}

// Inicialização

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btnGerarPaleta');
    
    // Vincula a função gerarPaleta ao clique do botão
    if (btn) {
        btn.addEventListener('click', gerarPaleta);
    }

    // Gera a paleta inicial na primeira carga da página
    gerarPaleta(); 
});