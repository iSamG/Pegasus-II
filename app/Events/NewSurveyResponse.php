<?php

namespace App\Events;

use App\Answer;
use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewSurveyResponse implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */


    public $surveyAnswerObject;

    public function __construct(Answer $answerObject)
    {
        $this->surveyAnswerObject = $answerObject;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {

        return ["new_survey_response"];

    }
}
