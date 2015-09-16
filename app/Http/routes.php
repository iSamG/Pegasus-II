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



//Route::get('/register', function(){
//    return 'ok';
//});

Route::post('/register', 'PegasusUserController@create');
Route::post('/login', 'PegasusUserController@authenticate');
Route::get('/logout', 'PegasusUserController@logout');
Route::get('/auth/user', 'PegasusUserController@currentUser');
//Route::post('/register', 'PegasusUserController@store');




Route::get('/dashboard', function () {
    return view('dashboard');
});


Route::post('/create/survey', 'SurveyController@createSurvey');

Route::post('/edit/survey', 'SurveyController@editSurvey');

Route::post('/delete/survey', 'SurveyController@deleteSurvey');

Route::get('/retrieve/all/surveys', 'SurveyController@retrieveAllSurveysByAnAdmin');

Route::post('/retrieve/a/survey', 'SurveyController@retrieveASurveyByAnAdmin');


