<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Respondent extends Model
{

    protected $table = 'respondents';



    protected $guarded = ['id'];


    /**
     * Get the user that created the survey.
     */
    public function user()
    {
        return $this->belongsTo('\App\User');
    }


    public function surveys()
    {
        return $this->belongsToMany('\App\Survey');
    }


}
