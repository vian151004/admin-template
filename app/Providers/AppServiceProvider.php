<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\Facades\URL; // <-- 1. Tambahkan import URL ini
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // 2. Tambahkan baris ini untuk memaksa skema HTTPS
        if (config('app.env') !== 'local' || request()->hasHeader('x-forwarded-proto')) {
            URL::forceScheme('https');
        }
    }
}