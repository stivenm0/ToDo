<?php

use App\Http\Controllers\NoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Tymon\JWTAuth\Facades\JWTAuth;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('notes', NoteController::class)
->middleware('auth:api');


Route::post('/logoutt', function () {
    return auth()->logout("true");
    return response()->json("success", 200);
    
})->middleware('auth:api');