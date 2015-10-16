<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Answer;
use App\Question;

class Survey extends Model
{

    protected $table = 'surveys';


    protected $guarded = ['id'];


    /**
     * Get the user that created the survey.
     */
    public function user()
    {
        return $this->belongsTo('\App\User');
    }



    /**
     * Get the questions under this survey.
     */
    public function questions()
    {
        return $this->hasMany('\App\Question');
    }


    /**
     * Get the questions under this survey.
     */
    public function answers()
    {
        return $this->hasMany('\App\Answer');
    }



}
