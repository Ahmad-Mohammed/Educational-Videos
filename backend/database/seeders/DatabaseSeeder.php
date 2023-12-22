<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Channel;
use App\Models\Comment;
use App\Models\Like;
use App\Models\Playlist;
use App\Models\Tag;
use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        // i want to create user factory
        User::factory(10)->create();
        Channel::factory(10)->create();
        Category::factory(10)->create();
        Playlist::factory(10)->create();

        Video::factory(10)->create();

        \App\Models\Video::factory(10)->create([
        ]);

        Like::factory(10)->create();
        Tag::factory(10)->create();
        Comment::factory(10)->create();



    }
}
