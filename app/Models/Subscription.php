<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Subscription extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'price',
    ];

    public function user(){
        return $this->hasMany(User::class, 'user_id', 'id');
    }
}
