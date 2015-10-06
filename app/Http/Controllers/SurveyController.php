<?php

namespace App\Http\Controllers;

use App\pegasustwo\Helpers;
use App\pegasustwo\surveys\SurveysRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

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
}
