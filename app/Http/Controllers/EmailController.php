<?php namespace App\Http\Controllers;



use Illuminate\Support\Facades\Mail;

class EmailController extends Controller{

    public function sendSurveyEmail(){
        $all_inputs = \Input::all();
        var_dump($all_inputs);

        $from = $all_inputs['from_email'];
        $link = $all_inputs['survey_url'];
        $id = 'id';
        $title = 'title';
        $name='Emmanuel';
        Mail::queue(
            'email_template',
            ['name'=>$name, 'survey_id'=>$id, 'title'=>$title,'link'=>$link],
            function($message){

                $message->from('dinli@pollafrique.com','Boss');
                $message->to('hadi@pollafrique.com','Emmanuel');
                $message->subject('PegasusRises Email Survey');
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