// SER VIVO
function SerVivo(nomeCientifico, reino, locomocao) {
    this.nomeCientifico = nomeCientifico;
    this.reino = reino; 
    this.locomocao = locomocao; 
    
    this.alimentar = function() {
        return `${this.nomeCientifico} está se alimentando.`;
    };
}

SerVivo.prototype.getDescricao = function() {
    return `Reino: ${this.reino}, Locomoção: ${this.locomocao}.`;
};

function Mamifero(nomeCientifico, locomocao, gestacao) {
    SerVivo.call(this, nomeCientifico, 'Animalia', locomocao);
    
    this.gestacao = gestacao; 

    this.amamentar = function() {
        return `${this.nomeCientifico} está amamentando seus filhotes.`;
    };
}

Mamifero.prototype.getDescricao = function() {
    return `O mamífero ${this.nomeCientifico} tem gestação de ${this.gestacao} meses.`;
};


function Ave(nomeCientifico, vooAltura) {
    SerVivo.call(this, nomeCientifico, 'Animalia', 'Voa');
    
    this.vooAltura = vooAltura;

    this.botarOvo = function() {
        return `${this.nomeCientifico} acaba de botar um ovo.`;
    };
}

Ave.prototype.getDescricao = function() {
    return `A ave ${this.nomeCientifico} pode voar a até ${this.vooAltura} metros.`;
};


const serHumano = new Mamifero("Homo sapiens", "Bípede", 9);
const aguia = new Ave("Aquila chrysaetos", 4000);
const baleia = new Mamifero("Balaenoptera musculus", "Nada", 11);

console.log(serHumano);
console.log(serHumano.getDescricao());

console.log('---');

console.log(aguia);
console.log(aguia.getDescricao());
console.log(aguia.botarOvo());