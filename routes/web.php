<?php

use App\Http\Controllers\Api\RentedUnitController;
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
Route::view('/units', 'index');

/// DASHBOARD FOR USERS 
Route::get('/dashboard', function () {
    return view('owner');
});

Route::view('/dashboard/all', 'ownerIndex');
Route::view('/dashboard/cashflow', 'ownerIndex');
Route::view('/dashboard/listings', 'ownerIndex');
Route::view('/dashboard/messages', 'ownerIndex');
Route::view('/dashboard/reports', 'ownerIndex');
