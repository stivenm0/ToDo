<?php

namespace App\Console\Commands;

use App\Models\Note;
use Illuminate\Console\Command;

class NoteCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'note {action} {--id= : ID of the note} {--title= : Title of the note} {--description= : description of the note} {--user_id= : user of the note} {--category_id= : category of the note}  ';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Manage notes (create, edit, list, delete)';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $action = $this->argument('action');

        switch ($action) {
            case 'create':
                $this->createNote();
                break;
            case 'edit':
                $this->editNote();
                break;
            case 'list':
                $this->listNotes();
                break;
            case 'delete':
                $this->deleteNote();
                break;
            default:
                $this->error('Invalid action. Use create, edit, list, or delete.');
                break;
        }
    }

    protected function createNote()
    {
        $title = $this->option('title') ?? $this->ask('Enter note title');
        $description = $this->option('description') ?? $this->ask('Enter note description');
        $user_id = $this->option('user_id') ?? $this->ask('Enter user_id');
        $category_id = $this->option('category_id') ?? $this->ask('Enter category_id');

        $note = Note::create([
            'title' => $title,
            'description' => $description,
            'user_id' => $user_id,
            'category_id' => $category_id, // Ajusta según cómo estés manejando el usuario
        ]);

        $this->info("Note created with ID: {$note->id}");
    }

    protected function editNote()
    {
        $id = $this->option('id');

        if (!$id) {
            $this->error('You must specify an ID using the --id option.');
            return;
        }

        $note = Note::find($id);
        if (!$note) {
            $this->error('Note not found.');
            return;
        }

        $note->title = $this->option('title') ?? 
        $this->ask('Enter new title', $note->title);

        $note->description = $this->option('description') ?? 
        $this->ask('Enter new description', $note->description);
        
        $note->user_id = $this->option('user_id') ?? 
        $this->ask('Enter new user', $note->user_id);

        $note->category_id = $this->option('category_id') ??
         $this->ask('Enter new category', $note->category_id);

        $note->save();
        $this->info("Note with ID: {$note->id} updated.");
    }

    protected function listNotes()
    {
        $notes = Note::all();
        if ($notes->isEmpty()) {
            $this->info('No notes found.');
            return;
        }

        foreach ($notes as $note) {
            $this->info("ID: {$note->id}, Title: {$note->title}, description: {$note->description}");
        }
    }

    protected function deleteNote()
    {
        $id = $this->option('id');

        if (!$id) {
            $this->error('You must specify an ID using the --id option.');
            return;
        }

        $note = Note::find($id);
        if (!$note) {
            $this->error('Note not found.');
            return;
        }

        $note->delete();
        $this->info("Note with ID: {$id} deleted.");
    }
}
