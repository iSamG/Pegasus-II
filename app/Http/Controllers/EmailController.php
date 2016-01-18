<?php namespace App\Http\Controllers;



use App\pegasustwo\Helpers;
use DB;
use Hash;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller{

    public function sendSurveyEmail(){
        $all_inputs = \Input::all();


        $GLOBALS['from'] = $all_inputs['from_email'];
        $link = $all_inputs['survey_url'];
        $recipients = $all_inputs['emails'];
        $survey_name = $all_inputs['survey_name'];
        $survey_description = $all_inputs['survey_description'];
        $name='Bissame';
        $GLOBALS["name"] = '';

        foreach($recipients as $address){

            $GLOBALS["name"] = $address;


            $send_mail = Mail::send(
                'email_template',
                ['name'=>$name, 'survey_id'=>'', 'survey_name'=>$survey_name, 'survey_description'=>$survey_description, 'link'=>$link],
                function($message){
                    $message->from($GLOBALS['from'],'Bissame');
                    $message->to($GLOBALS["name"]['text'],'Respondent');
                    $message->subject('Bissame Email Survey');
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

        $GLOBALS['email'] = $recovery_details['email'];
//        var_dump("hereeee");
//        exit();
        $user = DB::table('users')->where('email', $GLOBALS['email']);

            if($user){
                Mail::send(
                    'password_email_template',
                    ['name'=>'Bissame', 'survey_id'=>'', 'title'=>'Other details her',
                        'link'=>'http://www.bissame.com/email/authenticate/'.$GLOBALS['email']],
                    function($message){

                        $message->from("auth@bissame.com",'Bissame');
                        $message->to($GLOBALS['email'],'User');
                        $message->subject('Password Reset');
                    }
                );

                    return Helpers::responseToView($code = 200, $status = "OK", $message = "Email sent successfully", $data = null);
            }
        else{
            return Helpers::responseToView($code = 401, $status = "failed", $message = "The email is not a registered email",
                $data = null);
        }

    }

    public function changePasswordPOST($email){

//        $password_first = "yeshkjhvkhkjsdjd";
//        $password_confirm = "yeshkjhvkhkjsdjd";
         $recovery_details = \Input::all();

        $password_first = $recovery_details['password'];
        $password_confirm = $recovery_details['password_confirm'];
//        var_dump("hereeee");
//        exit();
        if($password_first == $password_confirm ){
            $user = DB::table('users')->where('email', $email)
                ->update(array('password' =>  Hash::make($password_confirm)));

            if($user){
                return Helpers::responseToView($code = 200, $status = "OK", $message = "User password updated successfully",
                    $data = $user);
            }  else{
                         return Helpers::responseToView($code = 401, $status = "failed", $message = "User email not found",
                             $data = null);
                     }

        }
        else{
            return Helpers::responseToView($code = 401, $status = "failed", $message = "Password does not match confirmation password",
                $data = null);
        }



    }

    public function showPage(){
        \View::make('email_template');
    }

    public function changePasswordGET($email){
//        return "looooo";
       return \View::make('password_recovery')->with('email',$email);
    }
}
/**
 * Created by PhpStorm.
 * User: Comrade-Hadi
 * Date: 10/12/2015
 * Time: 1:09 PM
 */