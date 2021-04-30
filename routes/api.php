<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth:api')->group(function () {
// Route::group(['prefix' => 'user'], function () {
//     Route::post('login', 'api/LoginController');
// });
// });

Route::group(['prefix' => 'user'], function () {
    Route::post('/login', 'api\LoginController@login');
    Route::middleware('auth:api')->get('/user-all','api\user\UserController@index');
});
