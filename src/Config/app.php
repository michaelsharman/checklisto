<?php

/*
|--------------------------------------------------------------------------
| Register the auto loader
|--------------------------------------------------------------------------
|
| Include composer's automatically generated class loader
|
*/
require_once __DIR__ . '/../../vendor/autoload.php';

header('Content-Type: application/json', true);

$section = explode('?', explode('/', $_SERVER['REQUEST_URI'])[1])[0];
if (empty($section)) {
    $section = 'main';
}

define('APPDIR', __DIR__ . '/../');
define('SECTION', $section);
define('WWWDIR', __DIR__ . '/../../www/');

$app = new \Slim\Slim([
    'debug'          => true,
    'templates.path' => APPDIR . 'Views/'
]);

if (is_readable(APPDIR . 'Routes/' . SECTION . '.php')) {
    require_once APPDIR . 'Routes/' . SECTION . '.php';
} else {
    header('HTTP/1.1 404 Not Found');
    die('Resource not found - please check the docs');
}

/*
|--------------------------------------------------------------------------
| Start the Slim application
|--------------------------------------------------------------------------
*/
$app->run();
