// Require all the things
var     gulp = require('gulp'),
        browserSync = require('browser-sync').create(),
        sass = require('gulp-ruby-sass'),
        sourcemaps = require('gulp-sourcemaps'),
        autoprefixer = require('gulp-autoprefixer'),
        cssnano = require('gulp-cssnano'),
        concat = require('gulp-concat'),
        uncss = require('gulp-uncss'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        include = require('gulp-include'),
        notify = require('gulp-notify'),
        del = require('del'),
        plumber = require('gulp-plumber'),
        gutil = require('gulp-util'),
        imagemin = require('gulp-imagemin'),
        newer = require('gulp-newer'),
        cp = require('child_process');

// Asset paths
var     base_path = './',
        src = base_path + '_dev/src',
        dist = base_path + 'assets', 
        site = base_path + '_site',
        paths = {
            js: src + '/js/*.js',
            sass: src + '/sass/**/*.scss',
            img: src + 'img/*',
            jekyll: ['*.html', '_posts/*', '_layouts/*', '_includes/*', '_assets/*','_assets/**/*', '_data/*']
        };


var messages = {
    jekyillBuild: '<span style="color: grey">Running</span> $ jekyll build'
};

// Rebuild jekyll
gulp.task('jekyll-build', function(done) { 
    browserSync.notify('Building Jekyll…');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('error', function(error) {
            gutil.log(gutil.colors.red(error.message));
        })
        .on('close', done); 
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

// Task: Static server with Browser Sync
gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-build'], function() {
    browserSync.init({
        server: {
            baseDir: "./_site"
        },
        // Open the site in Chrome
        browser: "google chrome"
    });
});
            
// TASK: Compile Sass
gulp.task('sass', function() {
    return sass(src + '/sass/main.scss', { sourcemap: true, style: 'expanded' })
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(['last 4 version'], {cascade: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist + '/css'))
        .pipe(browserSync.stream({match: '**/*.css'}))
        .pipe(notify({ message: 'Sass task completed' }));
});


// TASK: Concatenate & Minify JS Files
gulp.task('scripts', function() {
    return gulp.src(paths.js)
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest(dist + '/js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest(dist + '/js'))
        .pipe(browserSync.stream())
        .pipe(notify({ message: 'Scripts task completed' }));
});

// TASK: Image Optimization
gulp.task('images', function() {
    return gulp.src(paths.img)
        .pipe(newer(dist +'/img'))
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest(dist +'/img'))
        .pipe(notify({ message: 'Images task completed' }));
});

// TASK: Watch for changes
gulp.task('watch', function() {
    gulp.watch(paths.jekyll, ['jekyll-rebuild']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['scripts']);
    gulp.watch(paths.img, ['images']);
});

gulp.task('default', ['browser-sync', 'sass', 'scripts', 'images', 'watch']); 
