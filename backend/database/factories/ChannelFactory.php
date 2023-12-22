<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Channel>
 */
class ChannelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'teacher_name' => fake()->name(),
            'teacher_image' => '6hNxjrwawiEKb1xN.jpg',
            'channel_image' => '6hNxjrwawiEKb1xN.jpg',
            'about' =>fake()->paragraph(1),
        ];
    }
}
