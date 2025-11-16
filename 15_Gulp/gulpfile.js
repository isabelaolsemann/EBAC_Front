//npm run gulp
//npm run gulp sass
//npm run gulp watch

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');

// Comprime apenas imagens JPEG
function comprimeImagens() {
    return gulp.src('./source/images/*.jpg') // só jpg
        .pipe(imagemin([
            mozjpeg({ quality: 75 }) // ajuste a qualidade se quiser
        ]))
        .pipe(gulp.dest('./build/images'));
}

// Comprime e ofusca JavaScript
function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

// Compila e minifica Sass
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// Observa mudanças e executa tarefas
function watchSass() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*.jpg', { ignoreInitial: false }, gulp.series(comprimeImagens));
}

// Exporta tarefas
exports.sass = compilaSass;
exports.watch = watchSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;
exports.default = watchSass;
