<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $timestamp = false;

    protected $fillable = ['name'];

    public function notes()
    {
        return $this->belongsToMany(Note::class, 'category_note');
    }

}
