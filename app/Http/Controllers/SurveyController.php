<?php

namespace App\Http\Controllers;

use App\Answer;
use App\Events\NewSurveyResponse;
use App\pegasustwo\Helpers;
use App\pegasustwo\surveys\SurveysRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Vinkla\Pusher\Facades\Pusher;

class SurveyController extends Controller
{

    protected  $surveyRepository;

    protected $requestMade;

    public function __construct(SurveysRepository $surveyRepository, Request $requestMade) {

        $this->surveyRepository = $surveyRepository;

        $this->requestMade = $requestMade;

    }


    public function createSurvey(Requests\CreateSurveyRequest $createSurveyRequest)
    {

        $create_survey = $this->surveyRepository->createSurvey($createSurveyRequest->all());

        return $create_survey;

    }

    public function retrieveAllSurveysByAnAdmin()
    {
        $all_surveys_by_an_admin = $this->surveyRepository->retrieveAllSurveysByAnAdmin($this->requestMade->get('admin_id'));

        return $all_surveys_by_an_admin;
    }


    public function retrieveASurveyWithItsQuestions()
    {

        $survey_with_questions = $this->surveyRepository->retrieveASurveyWithItsQuestions($this->requestMade->get('survey_id'));

        return $survey_with_questions;

    }


    public function retrieveASurveyByAnAdmin($id)
    {
        $retrieve_a_survey_by_an_admin = $this->surveyRepository->retrieveASurveyByAnAdmin($this->requestMade->get('admin_id'), $this->requestMade->get('survey_id'));

        return $retrieve_a_survey_by_an_admin;

    }


    public function editSurvey()
    {

        $edit_survey = $this->surveyRepository->editSurvey($this->requestMade->all());

        return $edit_survey;

    }




    public function deleteSurvey()
    {

        $delete_survey = $this->surveyRepository->deleteSurvey($this->requestMade->get('survey_id'));

        return $delete_survey;

    }


    public function publicViewSurveyWithItsQuestions()
    {

        $public_view_survey = $this->surveyRepository->publicViewSurveyWithItsQuestions($this->requestMade->get("unique_id"));

        return $public_view_survey;

    }


    public function saveResponsesToSurvey()
    {
        $testAnswerObject = new Answer();
        $testAnswerObject->id = 1;
        $testAnswerObject->survey_id = 1;
        $testAnswerObject->name_of_respondent = "Gbeila Aliu Wahab";
        $testAnswerObject->email = "aliu@pollafrique.com";
        $testAnswerObject->phone_number = '02020303';
        $testAnswerObject->answer_response = 'Yes';

        event(new NewSurveyResponse($testAnswerObject));

        exit();


        $responses_to_survey_questions = $this->surveyRepository->saveAnswersToSurveyQuestions($this->requestMade->all());

        return $responses_to_survey_questions;

    }


    public function retrieveAnswersToSurveyQuestions()
    {

        $retrieve_all_answers_to_a_survey = $this->surveyRepository->retrieveAllAnswersToASurvey($this->requestMade->get("survey_id"));

        return $retrieve_all_answers_to_a_survey;
    }
}
