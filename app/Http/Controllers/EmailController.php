<?php namespace App\Http\Controllers;



use Illuminate\Support\Facades\Mail;

class EmailController extends Controller{

    public function sendSurveyEmail(){
        $name = 'name';
        $id = 'id';
        $title = 'title';
        $name='Hadi Mukaila';
//        $link = 'http://www.pegasus.dev'.'/'.$id;
        $link = 'http://pegasusrises.app/?unique_id=i7r';
        Mail::send(
            'email_template',
            ['name'=>$name, 'survey_id'=>$id, 'title'=>$title,'link'=>$link],
            function($message){

                $message->to('lostsaux@gmail.com','Francis KayGee')->subject('PegasusRises Email Survey');
            }
        );
    }


    public function showPage(){
        \View::make('email_template');
    }

}
/**
 * Created by PhpStorm.
 * User: Comrade-Hadi
 * Date: 10/12/2015
 * Time: 1:09 PM
 */