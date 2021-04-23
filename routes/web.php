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
//     return view('public/index');
// });

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('{anypath}','HomeController@index')->where('path','.*');
// Route::get('{any}', function () {
//     return view('admin.adminbase');
// })->where('any','.*');

Route::get('/post','PostController@all_Post');

Route::group(['middleware' => ['auth']], function () {
    
    Route::get('/admin/{vue?}', function () {
        return view('admin.adminbase');
    })->where('vue', '[\/\w\.-]*')->name('admin');

    //Category
    Route::post('/admin/add-category','CategoryController@addCategory');
    Route::post('/admin/check-category-validate','CategoryController@checkValidateCategory');
    Route::get('get-all-category','CategoryController@allCategories');
    Route::get('/edit-category/{id}','CategoryController@editCategory');
    Route::post('admin/update-category/{id}','CategoryController@updateCategory');
    Route::get('/admin/delete-category/{id}','CategoryController@selected_category');
    Route::delete('admin/delete-a-category/{id}','CategoryController@deleteCategory');
});