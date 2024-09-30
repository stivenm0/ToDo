<?php

namespace App\Services;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllNotes()
    {
        $query = Note::with('category')->where('user_id', auth()->id());
        if (request()->has('sort') && request()->query('sort') === 'due') {
            $query->orderBy('due_date','desc');
        }else{
            $query->orderBy('created_at','desc');
        }
    
        return $query->paginate(20);
    }


    public function createNote(array $data)
    {
        return Note::create($data);
    }

    public function updateNote(array $data, Note $note)
    {
        $note->update($data);

        return $note;
    }

    public function deleteNote(Note $note)
    {
        $note->delete();
    }
}
