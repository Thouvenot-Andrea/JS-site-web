$action = filter_input(INPUT_GET,"action", FILTER_SANITIZE_SPECIAL_CHARS);
$product_id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);
if(empty($action)){
    $action = '/';
}
$routes=array(
    '/' => '/HTML/home',
    "games" => '/HTML/games',
    "gallery" => '/HTML/gallery',);
if (isset($routes[$action])){
    include $routes[$action];}
