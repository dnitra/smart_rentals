<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RentedPropertyController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\UserDataController;
use App\Http\Controllers\Api\MailController;

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
//get userData
Route::get('/userData', [UserDataController::class, 'showAllUserData']);

//handle properties
Route::post('/property/store', [RentedPropertyController::class, 'store']);
Route::post('/property/{propertyId}/update', [RentedPropertyController::class, 'update']);
Route::post('/property/storeListingsDetails/{propertyId}', [RentedPropertyController::class, 'storeListingsDetails']);
Route::get('/property/list', [RentedPropertyController::class, 'showAllProperties']);
Route::get('/property/list/{id}', [RentedPropertyController::class, 'showProperty']);

//handle accesses
Route::post('/property/{propertyId}/add-access', [RentedPropertyController::class, 'addAccess']);
Route::post('/property/{propertyId}/remove-access/{accessId}', [RentedPropertyController::class, 'removeAccess']);
Route::get('/invite/{linkId}', [RentedPropertyController::class, 'showInvitation']);

//handle reports
Route::post('/report/store', [ReportController::class, 'store']);
Route::post('/report/status', [ReportController::class, 'updateStatus']);
Route::post('/report/deleteReport', [ReportController::class, 'deleteReport']);


//handle publishing
Route::post('/property/publish', [RentedPropertyController::class, 'handlePublishing']);



//handle emails
Route::post('/invite/sendEmail/{accessId}', [MailController::class, 'sendInvitation']);
Route::post('/application/sendEmail/{propertyId}', [MailController::class, 'sendApplication']);
