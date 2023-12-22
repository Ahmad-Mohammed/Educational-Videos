<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PlaylistController;
use App\Http\Controllers\Api\TeacherController;
use App\Http\Controllers\Api\VideoController;
use App\Models\Playlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});
Route::get('/videos', [VideoController::class, 'index']);
Route::get('/latest_videos', [VideoController::class, 'latest']);
Route::get('/video/{id}', [VideoController::class, 'show']);
Route::post('/videos', [VideoController::class, 'store']);
Route::get('/video/view/{id}', [VideoController::class, 'views']);
// Route::middleware('jwt.verify')->group(function () {
//     Route::get('/videos', [VideoController::class, 'index']);
//     Route::get('/video/{id}', [VideoController::class, 'show']);
//     Route::post('/videos', [VideoController::class, 'store']);
// });

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/teachers', [TeacherController::class, 'index']);
// Route::get('/playlist/{id}', [PlaylistController::class, 'show']);

