<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AnswerOption extends Model
{

    protected $table = 'answer_options';



    protected $guarded = ['id'];


    /**
     * Get the user that created the survey.
     */
    public function question()
    {
        return $this->belongsTo('\App\Question');
    }



    /**
     * Get the responses that are  under this option.
     */
    public function answers()
    {
        return $this->hasMany('\App\Answer');
    }





}
