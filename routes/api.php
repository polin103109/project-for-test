<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthApi;
use App\Models\User;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/users',function(){
    $users = User::get();
    return response()->json($users);
});
Route::get('/',function(){
    return ['name'=>'polin'];
});
Route::post('/login',"App\Http\Controllers\AuthApi@login");

