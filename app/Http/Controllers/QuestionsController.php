<?php

namespace App\Http\Controllers;

use App\pegasustwo\questions\QuestionsRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class QuestionsController extends Controller
{

    protected  $questionsRepository;

    protected $requestMade;

    public function __construct(QuestionsRepository $questionsRepository, \Request $requestMade) {

        $this->questionsRepository = $questionsRepository;

        $this->requestMade = $requestMade;


    }


    public function createQuestion(Requests\CreateQuestionRequest $createQuestionRequest)
    {
        $create_a_survey_question = $this->questionsRepository->createANewQuestion($createQuestionRequest->all());

        return $create_a_survey_question;

     }


    public function editQuestion(Requests\CreateQuestionRequest $createQuestionRequest)
    {

        $edit_a_survey_question = $this->questionsRepository->editAnExistingQuestion($createQuestionRequest->all());

        return $edit_a_survey_question;

    }


    public function deleteQuestion()
    {

        $delete_a_survey_question = $this->questionsRepository->deleteAQuestion($this->requestMade);

        return $delete_a_survey_question;

    }

}
