<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscription;
use App\Models\User;
use App\Models\Payment;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::id();
        $sub = Subscription::where('user_id', $id)->orderBy('created_at', 'DESC')->first();
        return $sub;
    }

    /**
     * Delete user by itself.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $payment = Payment::where('user_id', $id);
        $subscription = Subscription::where('user_id', $id);
        $user = User::find($id);
        $payment->delete();
        $subscription->delete();
        $user->delete();
        return $user;
    }
}
