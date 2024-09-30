<?php

namespace App\Policies;

use App\Models\User;

class ResourcePolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function owner(User $user, $resource): bool
    {
        return $user->id === $resource->user->id;
    }

}
