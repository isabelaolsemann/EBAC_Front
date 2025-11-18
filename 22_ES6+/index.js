class Aluno {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

const alunos = [
    new Aluno('Ana', 9.5),
    new Aluno('Carlos', 5.0),
    new Aluno('Fernanda', 7.5),
    new Aluno('Guilherme', 3.0),
    new Aluno('Patrícia', 6.0)
];

function checarAlunos(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = checarAlunos(alunos);
console.log(alunosAprovados);