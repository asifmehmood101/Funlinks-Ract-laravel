<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\PaymentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/users', [UserController::class, 'index']);
Route::post('/signup/plan/payment/credit/store', [CartController::class, 'store']);
Route::get('/user/userinfo', [UserController::class, 'index']);
Route::get('/user/userSubscription', [SubscriptionController::class, 'index']);
Route::delete('/user/userCancelSubscription/{id}', [SubscriptionController::class, 'destroy']);
Route::get('/user/userPayment', [PaymentController::class, 'index']);
Route::post('/user/login', [UserController::class, 'login']);
Route::post('/user/store', [UserController::class, 'store']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
