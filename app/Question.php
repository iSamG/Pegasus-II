<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

    protected $table = 'questions';



    protected $guarded = ['id'];


    /**
     * Get the user that created the survey.
     */
    public function survey()
    {
        return $this->belongsTo('\App\Survey');
    }



    /**
     * Get the answers under this question.
     */
    public function answers()
    {
        return $this->hasMany('\App\Answer');
    }



}
