<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function all_post()
    {
        $category = Category::with('post')->get();
        return $category;
    }
}
