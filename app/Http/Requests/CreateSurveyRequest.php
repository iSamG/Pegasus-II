<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreateSurveyRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => ['required'],
            'survey_name' => ['required'],
            'start_date' => ['required','email'],
            'end_date' => ['required']
        ];

        $table->bigIncrements('user_id');
        $table->string('survey_name');
        $table->enum('survey_type',['private','public']); //Just a thinking, suggest if any comes up
        $table->enum('survey_medium',['email','sms','ivr','any']); //Just a thinking, suggest if any comes up
        $table->timestamp('start_date');
        $table->timestamp('end_date');
    }
}
