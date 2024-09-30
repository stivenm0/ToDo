<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNoteRequest;
use App\Http\Resources\NoteResource;
use App\Models\Note;
use App\Services\NoteService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class NoteController extends Controller
{
    protected $noteService;

    public function __construct(NoteService $noteService)
    {
        $this->noteService = $noteService;
    }

    public function index()
    {
        return NoteResource::collection($this->noteService->getAllNotes());
    }


    public function store(StoreNoteRequest $request)
    {
        return response()->json(
            $this->noteService->createNote($request->validated()),
            201);
    }

    public function update(StoreNoteRequest $request, Note $note)
    {
        Gate::authorize('owner', $note);
        return response()->json(
            $this->noteService->updateNote($request->validated(), $note),
            200
        );
    }

    public function destroy(Note $note)
    {
        Gate::authorize('owner', $note);
        $this->noteService->deleteNote($note);

        return response()->json(null, 204);
    }
}
