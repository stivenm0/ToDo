<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Note>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $due= now()->addMonth()->addDays(rand(0, 30));
        $created = now()->addDays(rand(0, 30));
        return [
            'user_id' => \App\Models\User::factory(),
            'category_id' => \App\models\Category::inRandomOrder()->first('id'),
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'due_date' => $due,
            'image' => null,
            'created_at' => $created,
            'updated_at' => $created,
        ];
    }
}
