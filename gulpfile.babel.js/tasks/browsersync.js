'use strict';

import browserSync from 'browser-sync';
import gulp from 'gulp';

import routes from '../config/routes';

gulp.task('browserSync', () => {
    browserSync({
        // port: 5000,
        // ui: { port: 5001 },
        server: { baseDir: routes.dist.base + '/' },
        options: { reloadDelay: 250 },
        open: true,
        notify: false
    });
});
