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

Route::get('/', 'IndexController@index');
Route::get('/{any}', 'IndexController@index')->where('any', '(.*)');

Route::prefix('api')->group(function () {
  Route::post('/contact', 'Api\ContactController@postContact');
});
