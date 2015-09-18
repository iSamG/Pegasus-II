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
        return Helpers::logingInfo($message = "Retrieve all surveys", $data = $this->requestMade->all());

    }


    public function retrieveASurveyByAnAdmin($id)
    {
        return Helpers::logingInfo($message = "Retrieve a survey", $data = $this->requestMade->all());

    }


    public function editSurvey()
    {

        return Helpers::logingInfo($message = "Edit a survey", $data = $this->requestMade->all());

    }



    public function deleteSurvey()
    {

        return Helpers::logingInfo($message = "Delete a survey", $data = $this->requestMade->all());

    }
}
