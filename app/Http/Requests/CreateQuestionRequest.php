<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreateQuestionRequest extends Request
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
            'survey_id' => ['required'],
            'question_type' => ['required'],
            'input_type' => ['required'],
            'question' => ['required'],
            'question_unique_code' => ['required'],
            'answer_options' => ['required_if:question_type,close_ended'],
        ];
    }
}
