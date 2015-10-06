<?php namespace App\pegasustwo\surveys;
use App\pegasustwo\Helpers;
use App\Survey;
use DB;

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


    public function retrieveAllSurveysByAnAdmin($admin_id)
    {

            $retrieve_all_surveys_for_an_admin = \DB::table('surveys')->where('user_id',$admin_id)->get();

            return Helpers::responseToView($code = 200, $status= "OK", $message = "All your surveys returned successfully", $data = $retrieve_all_surveys_for_an_admin);

    }


    public function retrieveASurveyByAnAdmin($admin_id,$survey_id)
    {

        $survey_by_admin = \DB::table("surveys")->where("id", $survey_id)->where("user_id", $admin_id)->first();

        return Helpers::responseToView($code = 200, $status= "OK", $message = "A survey by an admin returned successfully", $data = $survey_by_admin);

    }


    public function retrieveASurveyWithItsQuestions($survey_id){

        $survey_with_questions = Survey::with('questions')->where('id', $survey_id)->get();

        return Helpers::responseToView($code = 200, $status= "OK", $message = "A survey with its questions returned successfully", $data = $survey_with_questions);

    }


    public function editSurvey($edit_survey_details = array())
    {

        $survey_id = $edit_survey_details["survey_id"];

        $edited_details_of_survey = array_except($edit_survey_details,['survey_id']);


        $update_survey = \DB::table('users')->where('id', 1)->update($edited_details_of_survey);

        if ($update_survey) {

            return Helpers::responseToView($code = 200, $status = "OK", $message = "Survey details update successfully", $data = $update_survey);
        }


        return Helpers::responseToView($code = 401, $status = "Failed", $message = "Unable to edit survey, try again", $data = $edit_survey_details);


    }



    public function deleteSurvey($survey_id)
    {

        $delete_survey = \DB::table('surveys')->where('id', $survey_id)->delete();

        if ($delete_survey) {

            return Helpers::responseToView($code=200, $status="OK",$message = "Survey deleted successfully");

        }


        return Helpers::responseToView($code=401, $status="Failed",$message = "Unable to delete survey, please try again");


    }



}