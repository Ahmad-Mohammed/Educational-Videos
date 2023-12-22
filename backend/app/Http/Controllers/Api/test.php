<?php

namespace App\Http\Controllers\Api;

use App\Models\Video;

trait test
{
    public function test($data = null)
    {

        $video = Video::create($data);

        return $video;
    }
}
