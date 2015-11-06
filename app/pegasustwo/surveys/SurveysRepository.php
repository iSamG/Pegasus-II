<?php namespace App\pegasustwo\surveys;
use App\Answer;
use App\Events\NewSurveyResponse;
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
        $unique_public_url_of_survey = Helpers::generateSurveyUniquePublicUrl();

        $details_of_survey_to_be_created = array_add($details_of_survey_to_be_created, 'survey_unique_public_url', $unique_public_url_of_survey);

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


        $update_survey = \DB::table('surveys')->where('id', $survey_id)->update($edited_details_of_survey);

        if ($update_survey) {

            return Helpers::responseToView($code = 200, $status = "OK", $message = "Survey details update successfully", $data = $update_survey);
        }


        return Helpers::responseToView($code = 401, $status = "Failed", $message = "Unable to edit survey, try again", $data = $edit_survey_details);


    }



    public function publicViewSurveyWithItsQuestions($survey_unique_public_url)
    {

        $survey = \DB::table('surveys')->where('survey_unique_public_url', $survey_unique_public_url)->first();

        if ($survey) {

            //TO DOs:
//            1. check if survey is publi, if not public does this user have the right

            return Helpers::responseToView($code=200, $status="OK",$message = "Survey retrieved successfully", $data = $survey);

        }


        return Helpers::responseToView($code=401, $status="Failed",$message = "Unable to retrieved survey, please try again");


    }


    public function saveAnswersToSurveyQuestions($answers_to_survey_questions = [])
    {

//        $answers_to_survey_questions = [
//            'survey_id' => 1,
//            'name_of_respondent' => "Gbeila Aliu Wahab",
//            'email' => "aliu@pollafrique.com",
//            'phone_number' => '02020303',
//            'answer_response' => 'Just an answer Just an answerJust an answerJust an answer'
//
//        ];


        $save_answers = Answer::create($answers_to_survey_questions);

        if ($save_answers) {

            event(new NewSurveyResponse($save_answers));

            return Helpers::responseToView($code=200, $status="OK",$message = "Survey answers saved successfully");

        }

        return Helpers::responseToView($code=401, $status="Failed",$message = "Unable to save survey answers");


    }


    public function retrieveAllAnswersToASurvey($survey_id)
    {

        $all_survey_answers = Survey::with("answers")->where("id",$survey_id)->first();

        return Helpers::responseToView($code=200, $status="OK",$message = "Survey with its answers retrieved successfully", $data = $all_survey_answers);

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