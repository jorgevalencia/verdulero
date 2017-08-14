'use strict';

import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import mozjpeg from 'imagemin-mozjpeg';

import routes from '../config/routes';

const $ = gulpLoadPlugins({ camelize: true });

const IMAGES_FILES = [
    routes.src.img + '/**/*'
];

gulp.task('images:compress', () => {
    return gulp.src(IMAGES_FILES)
        .pipe($.cache(
            $.imagemin([
                mozjpeg(),
                $.imagemin.gifsicle(),
                $.imagemin.optipng({optimizationLevel: 8}),
                $.imagemin.svgo()
            ])
        ))
        .pipe(gulp.dest(routes.dist.img));
});

gulp.task('images:watch', () => {
    gulp.watch([IMAGES_FILES], ['images:compress', browserSync.reload]);
});

gulp.task('images', ['images:compress']);
