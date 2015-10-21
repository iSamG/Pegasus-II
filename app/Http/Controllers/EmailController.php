<?php namespace App\Http\Controllers;



use Illuminate\Support\Facades\Mail;

class EmailController extends Controller{

    public function sendSurveyEmail(){
        $all_inputs = \Input::all();


        $from = $all_inputs['from_email'];
        $link = $all_inputs['survey_url'];
        $recipients = $all_inputs['emails'];
        $title = 'title';
        $name='Emmanuel';
        $GLOBALS["name"] = '';

        foreach($recipients as $address){

            $GLOBALS["name"] = $address;
            var_dump($GLOBALS["name"]);

            Mail::queue(
                'email_template',
                ['name'=>$name, 'survey_id'=>'', 'title'=>$title,'link'=>$link],
                function($message){

                    $message->from('instant@pollafrique.com','Pegasus User');
                    $message->to($GLOBALS["name"]['text'],'Respondent');
                    $message->subject('PegasusRises Email Survey');
                }
            );
        }
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