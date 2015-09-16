<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreatePegasusUser extends Request
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
            //
            //This are the rules for creating a new punter
            'first_name' => ['required', 'min:3'],
            'other_names' => ['required', 'min:3'],
            'email' => ['required', 'unique:users'],
            'username' => ['required','unique:users'],
            'password' => ['required', 'min:6'],
            'password_confirmation' => ['confirmed'],
            'phone_number' => ['required', 'min:10','unique:users']
        ];
    }
}
