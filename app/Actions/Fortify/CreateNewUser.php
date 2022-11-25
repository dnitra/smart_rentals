<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Illuminate\Support\Facades\DB;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            // 'first_name' => ['required', 'string', 'max:255'],
            // 'last_name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        $rented_property_id= $input[ 'rented_property_id']??null;
        $rented_property_user_role_id= $input[ 'rented_property_user_role_id'] ?? null;

        $user = User::create([
            'first_name' => $input['first_name']??null,
            'last_name' => $input['last_name']??null,
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        if($rented_property_id){

            DB::table('rented_property_user')->insert([
                'user_id' => $user->id,
                'rented_property_id' => $rented_property_id,
                'role_id' => $rented_property_user_role_id

            ]);

        }
        return $user;
    }
}
