<?php

namespace Deployer;

require 'recipe/common.php';

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'upload',
    'deploy:shared',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
])->desc('Deploy your project');

set('shared_files', ['.htaccess']);

set('ssh_type', 'native');
set('ssh_multiplexing', true);
set('allow_anonymous_stats', false);

task('upload', function () {
    upload('dist', get('release_path'));
})->setPrivate();

serverList('servers.yml');