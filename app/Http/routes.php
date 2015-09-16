<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
//    return view('welcome');
    return view('public_home');
});

Route::get('/dashboard', function () {
    return view('dashboard');
});

//Route::get('/register', function(){
//    return 'ok';
//});

Route::controllers([
    'password' => 'Auth\PasswordController',
]);

Route::get('/register','PegasusUserController@create');


Route::post('/register', 'PegasusUserController@create');
Route::post('/login', 'PegasusUserController@authenticate');
Route::get('/logout', 'PegasusUserController@logout');
Route::get('/auth/user', 'PegasusUserController@currentUser');
//Route::post('/register', 'PegasusUserController@store');

Route::post('/create/survey', function(){
    return "created successfully";
});
