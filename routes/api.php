<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RentedPropertyController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\UserDataController;
use App\Http\Controllers\ImageController;

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

Route::post('/property/store', [RentedPropertyController::class, 'store']);
Route::post('/property/publish', [RentedPropertyController::class, 'handlePublishing']);
Route::post('/report/store', [ReportController::class, 'store']);
Route::get('/userData', [UserDataController::class, 'showAllUserData']);
// Route::post('/property/store', [RentedPropertyController::class, '']);
Route::get('/property/list', [RentedPropertyController::class, 'showAllProperties']);
Route::get('/property/list/{id}', [RentedPropertyController::class, 'showProperty']);
