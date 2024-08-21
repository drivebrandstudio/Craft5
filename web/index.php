<?php
/**
 * Craft web bootstrap file
 */

// Load shared bootstrap
require dirname(__DIR__) . '/bootstrap.php';

// Headless mode define control panel route while allowing NextJS graphql/api route to work
define('CRAFT_CP', $_SERVER['REQUEST_URI'] !== '/api');


// Load and run Craft
/** @var craft\web\Application $app */
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/web.php';
$app->run();
