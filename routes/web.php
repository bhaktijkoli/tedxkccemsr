<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/update', function() {
  chdir(base_path());
  $res = exec('git reset --hard 2>&1', $output);
  $res = $res . '<br />' . exec('git pull origin master 2>&1', $output);
  return $res;
});

Route::get('/dbreset', function() {
  chdir(base_path());
  exec('php artisan migrate:refresh 2>&1', $output);
  foreach ($output as $out) {
    echo "$out</br>";
  }
  return "Done";
});


Route::get('/', 'IndexController@index');
Route::get('/{any}', 'IndexController@index')->where('any', '(.*)');

Route::prefix('api')->group(function () {
  Route::post('/contact', 'Api\ContactController@postContact');
});
