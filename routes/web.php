<?php

use App\Http\Controllers\Api\RentedPropertyController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::view('/login', 'index');
Route::view('/register', 'index');
Route::view('/test', 'index');

/// DASHBOARD FOR USERS 
Route::get('/dashboard', function () {
    return view('owner');
});

Route::view('/properties', 'owner-index');
Route::view('/dashboard/all', 'owner-index');
Route::view('/dashboard/cashflow', 'owner-index');
Route::view('/dashboard/listings', 'owner-index');
Route::view('/dashboard/messages', 'owner-index');
Route::view('/dashboard/reports', 'owner-index');

Route::get('/dashboard', function () {
    return view('owner');
});
