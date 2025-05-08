const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Usando require() aqui
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa de compilação de Sass e compressão do CSS
function styles() {
  return gulp.src('./src/styles/*.scss') // Diretório do Sass
    .pipe(sass({outputStyle: 'compressed'})) // Compressão do Sass para CSS
    .pipe(gulp.dest('./dist/css')); // Destino do CSS compilado e comprimido
}

// Tarefa de otimização de imagens
function images() {
  return gulp.src('./src/images/**/*') // Diretório de imagens
    .pipe(imagemin()) // Otimização das imagens
    .pipe(gulp.dest('./dist/images')); // Destino das imagens otimizadas
}

// Tarefa de minificação de JS
function scripts() {
  return gulp.src('./src/scripts/*.js') // Diretório de arquivos JS
    .pipe(uglify()) // Minificação do JavaScript
    .pipe(gulp.dest('./dist/js')); // Destino do JS minificado
}

// Tarefa padrão (executa todas as tarefas em paralelo)
exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}