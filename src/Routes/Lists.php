<?php

use \Learnosity\Controllers\Lists;

$Lists = null;
$app->hook(
    'slim.before',
    function () use ($app, &$Lists) {
        $Lists = new Lists();
    }
);

$app->get(
    '/Lists',
    function () use (&$Lists) {
        $data = $Lists->read($app->requestData);
        $app->renderView($data);
    }
);
