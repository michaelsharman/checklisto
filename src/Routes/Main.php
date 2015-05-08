<?php

$app->get(
    '/',
    function () use ($app) {
        $app->render('Layouts/main.php');
    }
);
