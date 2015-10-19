<?php

namespace App\Events;

use App\Answer;
use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewSurveyResponse extends Event implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */

    protected $surveyResponseObject = [];

    public function __construct(Answer $answerObject)
    {
        $this->surveyResponseObject = $answerObject->toArray();
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
