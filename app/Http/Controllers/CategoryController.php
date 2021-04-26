<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    // Displays all the categories
    public function allCategories()
    {
        $categories = Category::all();
        return response()->json([
            'categories' => $categories
        ], 200);
    }

    public function checkValidateCategory(Request $request)
    {
        $this->validate($request, [
            'cat_name' => 'required|min:2|max:100',
            'cat_description' => 'required|min:2|max:10000'
        ]);
        return ['message' => 'OK'];
    }

    // function to add a category
    public function addCategory(Request $request)
    {
        // return $request->all();
        $this->validate($request, [
            'cat_name' => 'required|min:2|max:100',
            'cat_description' => 'required|min:2|max:10000'
        ]);
        $category = new Category();
        $category->cat_name = $request->cat_name;
        $category->cat_description = $request->cat_description;
        $category->save();
        return ['message' => 'Add done'];
    }

    // function to find a category
    public function editCategory($id)
    {
        $category = Category::find($id);
        return response()->json([
            'category' => $category
        ], 200);
    }

    // updates the category 
    public function updateCategory(Request $request, $id)
    {
        $this->validate($request, [
            'cat_name' => 'required|min:2|max:100',
            'cat_description' => 'required|min:2|max:10000'
        ]);
        $category = Category::find($id);
        $category->cat_name = $request->cat_name;
        $category->cat_description = $request->cat_description;
        $category->save();
        return ['message' => 'Edited'];
    }

    // deletes the category
    public function deleteCategory($id)
    {
        $category = Category::find($id);
        $category->delete();
        return 'Deleted';
    }
}
