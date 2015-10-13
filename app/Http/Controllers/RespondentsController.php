<?php

namespace App\Http\Controllers;

use App\pegasustwo\Helpers;
use App\Respondent;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class RespondentsController extends Controller
{

    public function uploadSurveyRespondentsViaCSV()
    {
        $user_id = Input::get('user_id');

        $csv_file = Input::file('respondentscsv');

        if (is_file($csv_file)) {

            $csv_file_location = $csv_file->move(public_path() . '/csv/', time());

            $arrayOfCSVRespondents = Helpers::csvToArray($csv_file_location);



            foreach ($arrayOfCSVRespondents as $respondent) {

                $rowCount = 1;

                $fields = array('user_id' => $user_id,
                    'user_id' => $user_id,
                    'name' => $respondent['first_name'],
                    'email' => $respondent['last_name'],
                    'phone_number' => $respondent['phone_number']
                );

                try {

                    //validating the input
                    $create_respondents = Respondent::create($fields);


                } catch (Exception $e) {

                    echo "Error";

                }



            }


            return Helpers::responseToView($code = 200, $status = "OK", $message = "Respondents with all required data created successfully");

        }


        return Helpers::responseToView($code = 401, $status = "Failed", $message = "The file you selected is not a valid csv file, please check and try again");


    }

}
