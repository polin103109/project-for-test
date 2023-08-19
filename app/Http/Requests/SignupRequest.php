<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{
    
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first name' => 'required|string',
            'last name' => 'required|string',
            'address' => 'required|string',
            'phone' => 'required|number',
            'email' => 'required|email|string|unique:users,email',
            'birthdate' => 'required|string',
            'password' =>[
                'required',
                Password::min(8)->mixedCase()->numbers()->symbols()
            ]

        ];
    }
}
