'use strict';

import browserSync from 'browser-sync';
import fs from 'fs';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import routes from '../config/routes';
import fn from '../config/functions';

const $ = gulpLoadPlugins({ camelize: true });

const TWIG_FILES_WATCH = [
    routes.src.markup + '/**/*.twig',
    '!' + routes.src.markup + '/**/_*.twig'
];

const TWIG_FILES = [
    routes.src.markup + '/*.twig',
    '!' + routes.src.markup + '/_*.twig'
];

gulp.task('markup', [ 'markup:data' ], () => {
    var data_path = routes.src.data + '/data.json';

    if (!fs.existsSync(data_path)) {
        fn.errorAlert();
        return false;
    }

    var jsonData = JSON.parse(fs.readFileSync(data_path, 'utf-8').toString());
    var s = $.size({ title: 'Markup' });


    return gulp.src(TWIG_FILES)
        .pipe($.plumber({ errorHandler: fn.errorAlert }))
        .pipe($.twig({
            data: jsonData,
            cache: false
        }))
        // .pipe($.htmlmin({
        //     collapseWhitespace: true
        // }))
        .pipe(s)
        .pipe(gulp.dest(routes.dist.base))
        .pipe($.notify({
            onLast: true,
            message: function () {
                return `Total size of markup ${s.prettySize}`;
            }
        }));
});


// -------------------------------------
//   Task: Markup: Database -- WiP
// -------------------------------------

// gulp.task('markup:database', function() {
//     if (!database) { return; }
//     ...
// });

// -------------------------------------
//   Task: Markup: Data
// -------------------------------------

gulp.task('markup:data', () => {
    return gulp.src([
           `${routes.src.data}/*.yml`,
            `!${routes.src.data}/data.yml`
        ])
        .pipe($.plumber({ errorHandler: fn.errorAlert }))
        .pipe($.concat('data.yml'))
        .pipe(gulp.dest( routes.src.data ))
        .pipe($.yaml())
        .pipe(gulp.dest( routes.src.data ));
});

// -------------------------------------
//   Task: Markup: Watch
// -------------------------------------

gulp.task('markup:watch', () => {
    gulp.watch([TWIG_FILES_WATCH], ['markup', browserSync.reload]);
});
