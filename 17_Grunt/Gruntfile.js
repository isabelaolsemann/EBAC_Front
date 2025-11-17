module.exports = function(grunt) {

    // 1. Configuração do Projeto
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // ----------------------------------------------------
        // Tarefa 1: Compilação LESS (Substituindo SASS)
        // ----------------------------------------------------
        less: {
            development: {
                files: {
                    // Onde o CSS será salvo    : Onde o LESS está
                    './dist/styles/cores.css': './src/styles/cores.less'
                }
            }
        },

        // ----------------------------------------------------
        // Tarefa 2: Compressão de JavaScript (Uglify)
        // ----------------------------------------------------
        uglify: {
            target: {
                files: {
                    // Onde o JS comprimido será salvo : Qual JS original comprimir
                    './dist/scripts/main.min.js': './src/scripts/main.js'
                }
            }
        },

        // ----------------------------------------------------
        // Tarefa 3: Monitoramento de Arquivos (Watch)
        // ----------------------------------------------------
        watch: {
            less: {
                // Monitora arquivos .less e roda a tarefa 'less'
                files: ['./src/styles/**/*.less'],
                tasks: ['less']
            },
            js: {
                // Monitora arquivos .js e roda a tarefa 'uglify'
                files: ['./src/scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // 2. Carregar os plugins necessários
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 3. Registrar as tarefas (o que acontece quando rodamos 'grunt')
    // A tarefa padrão (default) vai rodar todas as compilações e compressões uma vez, e depois iniciar o 'watch'.
    grunt.registerTask('default', ['less', 'uglify', 'watch']);
};