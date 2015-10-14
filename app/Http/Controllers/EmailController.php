<?php

use App\Http\Controllers\Controller;

class EmailController extends Controller{

    public function sendSurveyEmail(){
        $name = 'name';
        $id = 'id';
        $title = 'title';
        Mail::send(
            'email_template',
            ['name'=>$name, 'survey_id'=>$id, 'title'=>$title],
            function($message){

                $message->to('hadi@pegasusrises.com','Mukaila Hadi')->subject('PegasusRises Email Survey');
            }
        );
    }


    public function showPage(){
        View::make('email_template');
    }

}
/**
 * Created by PhpStorm.
 * User: Comrade-Hadi
 * Date: 10/12/2015
 * Time: 1:09 PM
 */