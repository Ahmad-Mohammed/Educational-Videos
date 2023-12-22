<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use ApiResponse;

    public function index()
    {

        return $this->apiResponse(CategoryResource::collection(Category::all()), 'Ok', JsonResponse::HTTP_OK);
    }
}
