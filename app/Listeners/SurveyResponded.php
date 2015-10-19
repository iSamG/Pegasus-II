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
        echo $event->id;
        echo $event->survey_id;
        echo $event->name_of_respondent;
        echo $event->email;
        echo $event->phone_number;
        echo $event->answer_response;


    }
}
