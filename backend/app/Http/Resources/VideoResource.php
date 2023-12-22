<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VideoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'image' =>  $this->image,
            'video' =>  $this->video,
            'views' =>  $this->views,
            'date' => $this->created_at->diffForHumans(),
            'description' =>  $this->description,
            'categories' => $this->whenLoaded(
                'categories',
                $this->categories,
                []
            ),
            'videosPlaylist' => $this->whenLoaded(
                'playlist',
                $this->playlist->videos,
                []
            ),
            'tags' => $this->whenLoaded(
                'tags',
                $this->tags,
                []
            ),
        ];
    }
}
