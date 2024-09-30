<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Work'],
            ['name' => 'Personal'],
            ['name' => 'Shopping'],
            ['name' => 'Health'],
            ['name' => 'Fitness'],
            ['name' => 'Travel'],
            ['name' => 'Education'],
            ['name' => 'Finance'],
            ['name' => 'Projects'],
            ['name' => 'Miscellaneous'],
        ];        

        DB::table('categories')->insert($categories);
    }
}
