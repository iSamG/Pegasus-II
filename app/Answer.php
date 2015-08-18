<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{


    protected $table = 'answers';



    protected $guarded = ['id'];


    /**
     * Get the question that the answer belongs to.
     */
    public function question()
    {
        return $this->belongsTo('\App\Question');
    }



    /**
     * Get the question that the answer belongs to.
     */
    public function answer_option()
    {
        return $this->belongsTo('\App\AnswerOption');
    }



}
