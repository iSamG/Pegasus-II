<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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



}
