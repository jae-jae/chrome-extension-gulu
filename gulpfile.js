const del = require('del');
const exec = require('child_process').exec;
const livereload = require('gulp-livereload');
const { series, watch, parallel } = require('gulp');

function clean() {
 return del([
     'dist/**'
 ]);
}

function watchUI(cb) {
    exec('npm run dev',{cwd: "./ui"}, function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        livereload.reload()
        cb(err);
    });
}

function watchApp() {
    return watch('app/**', {ignoreInitial: false}, function(cb){
        console.log("scripts build...")
        exec('webpack --config ./build/webpack.dev.js --mode development --hide-modules', function(err, stdout, stderr){
            console.log(stdout);
            console.log(stderr);
            livereload.reload()
            cb(err);
        });
    });
}

function listen(cb) {
    livereload.listen()
    cb()
}

function buildApp(cb) {
    exec('npm run build',{cwd: "./ui"}, function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

function buildUI(cb) {
    exec('webpack --config ./build/webpack.prod.js --mode production --hide-modules', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

exports.build = series(clean, parallel(buildApp, buildUI));
exports.default = series(clean,listen,parallel(watchApp,watchUI));