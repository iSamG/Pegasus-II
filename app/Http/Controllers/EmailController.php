<?php namespace App\Http\Controllers;



use App\pegasustwo\Helpers;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller{

    public function sendSurveyEmail(){
        $all_inputs = \Input::all();


        $GLOBALS['from'] = $all_inputs['from_email'];
        $link = $all_inputs['survey_url'];
        $recipients = $all_inputs['emails'];
        $survey_name = $all_inputs['survey_name'];
        $survey_description = $all_inputs['survey_description'];
        $name='Pegasus';
        $GLOBALS["name"] = '';

        foreach($recipients as $address){

            $GLOBALS["name"] = $address;

            $send_mail = Mail::queue(
                'email_template',
                ['name'=>$name, 'survey_id'=>'', 'survey_name'=>$survey_name, 'survey_description'=>$survey_description, 'link'=>$link],
                function($message){
                    $message->from($GLOBALS['from'],'Pegasus');
                    $message->to($GLOBALS["name"]['text'],'Respondent');
                    $message->subject('Pegasus Email Survey');
                }
            );
                            return Helpers::responseToView($code = 200, $status = "OK", $message = "Survey email sent successfully");


            //var_dump($send_mail);
//            if($send_mail){
//                return Helpers::responseToView($code = 200, $status = "OK", $message = "Survey email sent successfully");
//
//            }
//            else{
//                return Helpers::responseToView($code = 400, $status = "Error", $message = "An error occured whiles sending to ".$GLOBALS["name"]['text']);
//
//            }
        }
    }


    public function sendPasswordREcoveryEmail(){
        $recovery_details = \Input::all();

        $email = $recovery_details['email'];

        $send_mail = Mail::queue(
            'email_template',
            ['name'=>'Pegasus Users name', 'survey_id'=>'', 'title'=>'Other details her','link'=>'A link to home page'],
            function($message){

                $message->from($GLOBALS['from'],'Pegasus User');
                $message->to($GLOBALS["name"]['text'],'Respondent');
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