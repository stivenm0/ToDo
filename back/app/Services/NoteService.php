<?php

namespace App\Services;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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
        Log::info(request());
        $query = Note::with('category')->where('user_id', auth()->id());
        if (request()->has('sort') && request()->query('sort') === 'due_date') {
            $query->orderBy('due_date','desc');
        }else{
            $query->orderBy('created_at','desc');
        }
    
        return $query->get();
    }


    public function createNote(array $data)
    {
        return Note::create($data);
    }

    public function updateNote(array $data, Note $note)
    {
        if(array_key_exists('image', $data)){
            $data['image'] = $this->saveImage($data['image'], $note);
        }
        
        $note->update($data);

        return $note;
    }

    public function deleteNote(Note $note)
    {
        if ($note->image) {
            Storage::disk('images')->delete($note->image);
        }
        $note->delete();
    }

    public function saveImage($image, $note)
    {

        if ($note->image) {
            Storage::disk('images')->delete($note->image);
        }

        $nameImage =  time() . $image->getClientOriginalName();

        Storage::disk('images')->put($nameImage, File::get($image));

        return $nameImage;
    }
}
