<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Stripe\Charge;
use Stripe\Stripe;
use Stripe\Token;
use App\Models\Payment;
use App\Models\Subscription;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id=Auth::id();
        $data = json_decode($request->getContent());
        Stripe::setApiKey("sk_test_51HeMxMGahXUsew7k6ec4XRpLmmlMfZsME2gfh5wV6dLECgbL0ughoIFsOUVxyKHU5emmui1Ns5QGQnQWuLQtKaT700QH3hrEDe");
        $result = Token::create(
            array(
                "card" => array(
                    "name" => $data->username,
                    "number" => $data->cardNumber,
                    "exp_month" => '12',
                    "exp_year" => '21',
                    "cvc" => $data->Cvv
                )
            )
        );
        $token = $result['id'];

        $charge = Charge::create(array(
            "amount" => 500*100,
            "currency" => "usd",
            "source" => $token,
            "description" => "Test Charge"
      ));
      $subsciption = Subscription::create([
            "user_id"      => $id,
            "price"     => 500,
        ]);
      $payment = Payment::create([
            "user_id"           => $id,
            "card_number"       => $data->cardNumber,
            "cvv"               => $data->Cvv, 
            "card_expiry_date"  => $data->cardDate, 
        ]);
      return [
          $subsciption,
          $payment,
      ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
