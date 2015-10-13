<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class RespondentsController extends Controller
{

    public function uploadRespondentsViaCSV()
    {
        $school_reference_code = Input::get('user_id');

        // echo "The school reference code is: ".$school_reference_code;
        // exit();

        $csv_file = Input::file('respondentscsv');

        if (!empty($school_id) & is_file($csv_file)) {


            $csv_file_location = $csv_file->move(public_path() . '/csv/', time());
            //return $csv_file_location;
            //return "No file Uploaded";

            $arrayOfCSVTeachers = Helper::csvToArray($csv_file_location);

            //array that will contain errors generated when creating teachers from CSV file
            // $array_of_errors = array('foo' => 'bar');


            foreach ($arrayOfCSVTeachers as $csvTeacherInfo) {

                $rowCount = 1;

                $fields = array('school_reference_code' => $school_reference_code,
                    'questions_category_reference_code' => 'STI',
                    'first_name' => $csvTeacherInfo['first_name'],
                    'last_name' => $csvTeacherInfo['last_name'],
                    'gender' => $csvTeacherInfo['gender'],
                    'level_taught' => $csvTeacherInfo['level_taught'],
                    'class_subject_taught' => $csvTeacherInfo['class_subject_taught'],
                    'class_taught' => $csvTeacherInfo['class_taught'],
                    'category' => $csvTeacherInfo['category'],
                    'staff_number' => $csvTeacherInfo['staff_number'],
                    'rank' => $csvTeacherInfo['rank'],
                    'highest_academic_qualification' => $csvTeacherInfo['highest_academic_qualification'],
                    'highest_professional_qualification' => $csvTeacherInfo['highest_professional_qualification'],
                    'years_in_the_school' => $csvTeacherInfo['years_in_the_school'],

                );

                try {

                    //validating the input
                    $validation = Teachers::create($fields);


                } catch (Exception $e) {

                    echo "Error";

                }



            }


            return 'success';

        }

        return 'failed';

    }

}
