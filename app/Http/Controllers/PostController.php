<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Faker\Provider\Image;
class PostController extends Controller
{
    public function all_Post(){
        $posts = Post::with('user','category')->orderBy('id','desc')->get();
        return response()->json([
            'posts'=>$posts
        ],200);
    }
}
