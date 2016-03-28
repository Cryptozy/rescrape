<?php
$router = new AltoRouter();
$router->setBasePath('/rescrape');

// map homepage
$router->map( 'GET', '/', function() {
  if(isset($_SESSION['status']) && $_SESSION['status'] == true){
    require 'views/home/home.php';
  } else {
    require 'views/login/login.php';
  }
});

/* Match the current request */
$match = $router->match();

if( $match && is_callable( $match['target'] ) ) {
    include("views/head.php");
    call_user_func_array( $match['target'], $match['params'] );
    include("views/footer.php");
} else {
  header("HTTP/1.0 404 Not Found");
  require 'views/404.html';
}
?>
