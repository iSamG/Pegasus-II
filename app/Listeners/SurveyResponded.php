<?php

namespace App\Listeners;

use App\Events\NewSurveyResponse;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SurveyResponded
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewSurveyResponse  $event
     * @return void
     */
    public function handle(NewSurveyResponse $event)
    {
//        echo $event->surveyAnswerObject->id;
//        echo $event->surveyAnswerObject->survey_id;
//        echo $event->surveyAnswerObject->name_of_respondent;
//        echo $event->surveyAnswerObject->email;
//        echo $event->surveyAnswerObject->phone_number;
//        echo $event->surveyAnswerObject->answer_response;


    }
}
