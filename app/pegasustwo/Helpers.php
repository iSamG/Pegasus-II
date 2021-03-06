<?php namespace App\pegasustwo;

/**
 * This is a helper class that contains generic functions
 * I can use any where in the application
 * Most of it's functions will be statis ones
 */

use App\Auction;
use Response;
use AWS;
use DB;
use Log;
use Illuminate\Validation;
//use Illuminate\Validation\Validator;
use Validator;
use Image;
use File;

class Helpers
{


    public static function generateSurveyUniquePublicUrl() {


        $random_unique_string = 3;

        $characters = 'a0bc1de2fg3hi4jkl5mno6pqr7stu8vw9xyz';

        $unique_survey_code = '';

        for ($i = 0; $i < $random_unique_string; $i++) {

            $unique_survey_code .= $characters[rand(0, strlen($characters) - 1)];

        }

        $unique_survey_code = strtolower($unique_survey_code);

        // Base Url for Production
               $base_url = "http://bissame.com/survey";


        //Base Url for Local Development
//        $base_url = "http://pegasusrises.app/survey";

        $survey_public_url = $base_url . "?unique_id=".$unique_survey_code;


        $check_if_auction_code_already_exist = DB::table('surveys')->where('survey_unique_public_url', $survey_public_url)->first();

        if (count($check_if_auction_code_already_exist) > 0) {

            generateSurveyUniquePublicUrl();

        }else{

            return $survey_public_url;
        }

    }






    public static function generateQuestionUniqueCode($table  = 'questions', $column = 'question_unique_code'){

        $uniqueCode = str_random(16);

        $exist = DB::table($table)->where($column,$uniqueCode)->first();

        if($exist){

            generateQuestionUniqueCode();

        }

        return $uniqueCode;
    }




    public static function responseToView($code = 200, $status = "OK", $message = "An Unexplained Error occurred on the server", $data = NULL)
    {

        $response = Response::json(array("code"=> $code,
            "status"=> $status,
            "message" => $message,
            "data" => $data));

        return $response;
    }




    public static function UploadFileOnS3($s3Bucket,$file_name,$fileOnLocalDirectory)
    {

        $s3 = AWS::get('s3');

        $file_saved_on_s3 = $s3->putObject(array(
            'Bucket'     => $s3Bucket,
            'Key'        => $file_name,
            'SourceFile' => $fileOnLocalDirectory,
            'ACL'   	 => 'public-read',
        ));

        return $file_saved_on_s3;

    }



    //this function deletes the file whose path is given
    public static function deleteFileFromAGivenLocalPath($fileOnLocalDirectory)
    {
        if (file_exists($fileOnLocalDirectory)) {

            unlink($fileOnLocalDirectory);

            $delete_status = self::responseToView($code = 200, $status = "OK", $message = "The given file successfully deleted");

            return $delete_status;

        }else{


            $delete_status = self::responseToView($code = 401, $status = "Failed", $message = "No file exist in the given path");

            return $delete_status;

        }
    }


    public static function generateAccountConfirmationURL($email,$code,$phone_number){

//        Production/Online
        $base_url = "http://www.i-bid2win.com/account/confirmation/via/email";

        //Local Development
//        $base_url = "http://app.i-bid2win.com/account/confirmation/via/email";

        $account_confirmation_url = $base_url . "?email=".$email."&code=".$code."&phone_number=".$phone_number;

        return $account_confirmation_url;


    }


    public static function generatePasswordResetURL($email,$token){

        $base_url = "http://www.i-bid2win.com/password/reset/url";

        $password_reset_url = $base_url . "?email=".$email."&token=".$token;

        return $password_reset_url;

    }



    public static function logingInfo($message = "Just logging to see whether the route was hit",$data = null)
    {
        Log::info($message, $data);
    }




    public static function uploadProfilePictureViaAndroidRequest($imageFile)
    {
        //checking to see if there is a file posted
        if (file_exists($imageFile)){
            // $file = Input::file('image');
            $image = Image::make($imageFile->getRealPath());
            //directory to save images into
            $directoryPath = public_path(). '/items/';
            //this check if directory exist, if not it creates one
            File::exists($directoryPath) or File::makeDirectory($directoryPath);
            //getting original file name and time in order to save file in that name
            $file_name = time() . '-' .$imageFile->getClientOriginalName();
            //giving the absolute path to the image including its name
            $fileOnLocalDirectory = public_path('/items/'.$file_name);

            //resizing image to a specific size
            //$image->resize(610, 370)->insert(public_path().'/watermark.png');
//            $image->insert(public_path().'/watermark.png');

            $imageDetailsSaveByIntervention = $image->save($fileOnLocalDirectory);

            //checking if the image and the name of image exist
            if (file_exists($fileOnLocalDirectory) && !empty($file_name)) {

                $s3Bucket = 'bids-items-pics';
                //calling the function to save file at S3
                $file_saved_on_s3 = Helpers::UploadFileOnS3($s3Bucket,$file_name,$fileOnLocalDirectory);


                if (!empty($file_saved_on_s3)) {

                    $url_of_file_on_s3 = $file_saved_on_s3['ObjectURL'];

                    $deleteLocalCopyOfFile = Helpers::deleteFileFromAGivenLocalPath($fileOnLocalDirectory);

                    return $url_of_file_on_s3;

                }else{

                    return false;
                }

            }else{

                return false;
            }
        }else{

            return false;
        }



    }




    public static function csvToArray($csv_file_location, $delimiter=',')
    {
        if(!file_exists($csv_file_location) || !is_readable($csv_file_location))
            return FALSE;

        $header = NULL;

        $data = array();

        if (($handle = fopen($csv_file_location, 'r')) !== FALSE)
        {
            while (($row = fgetcsv($handle, 250, $delimiter)) !== FALSE)
            {
                if(!$header){

                    $header = $row;

                }
                else{

                    $data[] = array_combine($header, $row);
                }
            }
            fclose($handle);
            unlink($csv_file_location);
        }

        return $data;
    }


}




?>