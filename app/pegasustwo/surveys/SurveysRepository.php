<?php namespace App\pegasustwo\surveys;
use App\pegasustwo\Helpers;
use App\Survey;

/**
 * Created by PhpStorm.
 * User: Gbeila Aliu Wahab
 * Date: 9/16/2015
 * Time: 3:43 PM
 */

class SurveysRepository {


    public function createSurvey($details_of_survey_to_be_created)
    {
        $create_survey = Survey::create($details_of_survey_to_be_created);

        return Helpers::responseToView($code = 200, $status= "OK",$message= "Survey created successfully", $data = $create_survey);

    }


    public function retrieveAllSurveysByAnAdmin()
    {


    }


    public function retrieveASurveyByAnAdmin($id)
    {


    }


    public function editSurvey()
    {


    }



    public function deleteSurvey()
    {

    }

}