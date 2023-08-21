<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class AuthApi extends Controller
{
    //
    function login(Request $request){
        $data = $request->input();
        return response()->json($data);
        


        
    }
    }

