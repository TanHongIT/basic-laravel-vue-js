<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/dashboard', 'HomeController@admin')->name('admin');

Route::get('/{anypath}','HomeController@index')->where('path','.*');

Route::get('/post','PostController@all_Post');

Route::group(['middleware' => ['auth']], function () {
    //Category
    Route::post('/add-category','CategoryController@addCategory');
    Route::get('category','CategoryController@allCategories');
    Route::get('edit-category/{id}','CategoryController@editCategory');
    Route::post('update-category/{id}','CategoryController@updateCategory');
    Route::get('/delete-category/{id}','CategoryController@selected_category');
    Route::delete('category/{id}','CategoryController@deleteCategory');
});