<?php

namespace App\Http\Controllers;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data=$request->validated();
        $user =User::create([
            'First Name' => $data['First Name'],
            'Last Name' => $data['Last Name'],
            'Address' => $data['Address'],
            'Phone' => $data['Phone'],
            'Email' => $data['Email'],
            'Birthdate' => $data['Birthdate'],
            'Password' => bcrypt($data['Password'])

        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user'=> $user,
            'token' => $token
        ]);

    }
    public function login(LoginRequest $request)
    {
        $credentials=$request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if(!Auth::attempt($credentials,$remember)){
            return response([
                'error' => 'The provided credentails are not correect'
            ],422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user'=> $user,
            'token' => $token
        ]);


        
    }
 
}
