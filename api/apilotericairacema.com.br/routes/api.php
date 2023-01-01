<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('auth/login', 'App\Http\Controllers\Api\AuthController@login');
Route::get('bettings', 'App\Http\Controllers\Api\BettingAPIController@index');

Route::group(['middleware' => 'apiJWT'], function () {
    Route::get('users', 'App\Http\Controllers\Api\UserController@index');
    Route::resource('bettings', App\Http\Controllers\Api\BettingAPIController::class)->except(['index']);
});


