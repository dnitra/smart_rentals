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
// Route::get('/dashboard', function () {
//     return view('owner');
// });

Route::view('/properties', 'index');
Route::view('/owner/dashboard', 'index');
Route::view('/owner/dashboard/all', 'index');
Route::view('/owner/dashboard/cashflow', 'index');
Route::view('/owner/dashboard/listings', 'index');
Route::view('/owner/dashboard/messages', 'index');
Route::view('/owner/dashboard/reports', 'index');

Route::get('/dashboard', function () {
    return view('owner');
});
