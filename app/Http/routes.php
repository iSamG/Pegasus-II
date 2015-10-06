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

Route::controllers([
    'password' => 'Auth\PasswordController',
]);

Route::get('/register','PegasusUserController@create');


Route::post('/register', 'PegasusUserController@create');
Route::post('/login', 'PegasusUserController@authenticate');
Route::get('/logout', 'PegasusUserController@logout');
Route::get('/auth/user', 'PegasusUserController@currentUser');
//Route::post('/register', 'PegasusUserController@store');




Route::get('/dashboard', function () {
    return view('dashboard');
});


Route::post('/create/survey', [

    'as' => 'create_survey', 'uses' => 'SurveyController@createSurvey'

]);

Route::post('/edit/survey', [

    'as' => 'edit_survey', 'uses' => 'SurveyController@editSurvey'

]);

Route::post('/delete/survey', [

    'as' => 'delete_survey', 'uses' => 'SurveyController@deleteSurvey'

]);

Route::get('/retrieve/all/surveys', [

    'as' => 'retrieve_all_surveys', 'uses' => 'SurveyController@retrieveAllSurveysByAnAdmin'

]);

Route::post('/retrieve/a/survey', [

    'as' => 'retrieve_a_survey', 'uses' => 'SurveyController@retrieveASurveyByAnAdmin'

]);


Route::post('/create/a/survey/question', [

    'as' => 'create_a_survey_question', 'uses' => 'QuestionsController@createQuestion'

]);



Route::post('/edit/a/survey/question', [

    'as' => 'edit_a_survey_question', 'uses' => 'QuestionsController@editQuestion'

]);


Route::post('/delete/a/survey/question', [

    'as' => 'delete_a_survey_question', 'uses' => 'QuestionsController@deleteQuestion'

]);


