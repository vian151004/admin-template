<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/users', function () {
        return Inertia::render('Users');
    })->name('users.index');

    Route::get('/products', function () {
        return Inertia::render('Products');
    })->name('products.index');

    Route::get('/settings', function () {
        return Inertia::render('Settings');
    })->name('settings.index');
});

require __DIR__.'/auth.php';
