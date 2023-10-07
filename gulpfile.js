const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//utilidades css
/*const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
*/
const paths ={
    scss: 'src/scss/**/*.scss'
}
function css(){
    return src(paths.scss)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(dest('./public/'))
}
function watchArchivos(){
    watch(paths.scss, css);
}

exports.css = css;
exports.watchArchivos = watchArchivos;

//exports.default = series(imagenes,javascript,watchArchivos);
exports.default = series(watchArchivos);
