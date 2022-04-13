<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //Register new user
    public function register(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data,[
            'name'     => 'required',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'validationError' => $validator->errors()
            ]);
        }else{

            $user = User::insert([
                'name'     => $data['name'],
                'email'    => $data['email'],
                'password' => Hash::make($data['password'])
            ]);

            if ($user == true) {
                return response()->json([
                    'status'  => true,
                    'message' => 'User created successfully'
                ], 200);
            }else{
                return response()->json([
                    'status'  => false,
                    'message' => 'User registered failed'
                ], 404);
            }

        }
    }

    //Login user
    public function login(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data,[
            'email'    => 'required|email',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'validationError' => $validator->errors()
            ]);
        }else{

            $credentials = $request->only(['email','password']);

            if (Auth::attempt($credentials)) {

                $user = $request->user();

                $token = $user->createToken('Personal Access Token')->accessToken;
                $token_expires = Carbon::now()->addWeek(1);


                return response()->json([
                    'status'  => true,
                    'access_token' => $token,
                    'token_type' => "Bearer",
                    'token_expires' => Carbon::parse($token_expires)->toDateString()
                ]);
            }else{
                return response()->json([
                    'status'  => false,
                    'message' => 'Unauthorized'
                ], 401);
            }

        }
    }

    //User logout
    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();

        return response()->json([
            'status'  => true,
            'message' => 'Logout successfully'
        ]);
    }



}
