<?php

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
    return view('dashboard');
});

Route::view('/dashboard/all', 'userIndex');
Route::view('/dashboard/cashflow', 'userIndex');
Route::view('/dashboard/listings', 'userIndex');
Route::view('/dashboard/messages', 'userIndex');
Route::view('/dashboard/reports', 'userIndex');
