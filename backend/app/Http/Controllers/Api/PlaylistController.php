<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\VideoResource;
use App\Models\Playlist;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlaylistController extends Controller
{
    // public function show($id)
    // {
    //     return $this->apiResponse(VideoResource::collection(Playlist::find($id)->videos), 'Ok', JsonResponse::HTTP_OK);
    // }
}
