<?php

use App\Http\Controllers\Api\RentedPropertyController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;





/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::view('/', 'index');
Route::view('/login', 'index');
Route::view('/register', 'index');
Route::view('/register/{linkId}', 'index');
Route::view('/choosePortal', 'index');
Route::view('/public_listings', 'index');

Route::get('/publicListings/show', [RentedPropertyController::class, 'showPublicListings']);


/// DASHBOARD FOR OWNER
Route::view('/owner/properties', 'index');
Route::view('/owner/dashboard', 'index');
Route::view('/owner/dashboard/all', 'index');
Route::view('/owner/dashboard/listings/details/apartment', 'index');
Route::view('/owner/dashboard/listings/details/land', 'index');
Route::view('/owner/dashboard/listings/details/house', 'index');
Route::view('/owner/dashboard/listings/details/commercial', 'index');
Route::view('/owner/dashboard/cashflow', 'index');
Route::view('/owner/dashboard/listings', 'index');
Route::view('/owner/dashboard/listings/create', 'index');
Route::view('/owner/dashboard/messages', 'index');
Route::view('/owner/dashboard/reports', 'index');
Route::view('/owner/dashboard/property/all/{propertyId}', 'index');
Route::view('/owner/property/{propertyId}/accesses', 'index');
Route::view('/owner/dashboard/property/all/{propertyId}/edit', 'index');



/// DASHBOARD FOR TENANT
Route::view('/tenant/dashboard', 'index');
Route::view('/tenant/dashboard/all', 'index');
Route::view('/tenant/dashboard/messages', 'index');
Route::view('/tenant/dashboard/reports', 'index');
Route::view('/invite/{linkId}', 'index');

