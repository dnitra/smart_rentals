<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RentedPropertyController;
use Illuminate\Support\Facades\Auth;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

    return $request->user();
});

// Route::get("/user/auth", function (Request $request) {
//     // dd($request->user());
//     return Auth::user();
// });


Route::post('/property/store', [RentedPropertyController::class, 'store']);
Route::get('/property/list', [RentedPropertyController::class, 'showAllProperties']);
Route::get('/property/list/{id}', [RentedPropertyController::class, 'showProperty']);