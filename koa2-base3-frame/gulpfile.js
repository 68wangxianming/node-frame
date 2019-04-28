const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const entry = "./src/server/**/*.js";

//开发环境
function builddev() {
    return watch(entry, { ignoreInitial: false }, function () {
        gulp.src(entry)
            .pipe(babel({
                babelrc:false,
                "plugins": ["@babel/plugin-transform-modules-commonjs"]
            }))
            .pipe(gulp.dest('dist'));
    })
}
//上线环境
function buildprod() {

}
//清洗流
function buildconfig() {

}
//代码校验
let build = gulp.series(builddev);
console.log(build);

if(process.env.NODE_ENV == 'development') {

}

gulp.task("default",build);