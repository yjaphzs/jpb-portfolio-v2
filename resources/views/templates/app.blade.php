<!DOCTYPE html>
<html lang="en" class="notranslate" translate="no">
    <head>
        {{-- Meta --}}
        <meta charset="utf-8" />
        <meta name="google" content="notranslate" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Web Portfolio - Jan Bautista" />
        <meta name="author" content="Jan Bautista" />

        {{-- Icons --}}
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
        <link rel="manifest" href="{{ asset('site.webmanifest') }}">

        {{-- Fonts --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">


        {{-- Title --}}
        <title>{{ config('app.name') }}</title>

        @vite(['resources/scss/app.scss', 'resources/js/app.js'])
    </head>

    <body>
        <div id="pointer-gradient"></div>
        {{-- Header --}}
        <div id="content-viewer">
        @include('partials.header')

        {{-- Page Content --}}
        @yield('content')
        </div>

        {{-- Additional Script --}}
        @yield('script')
        <div id="cover-overlay" class="fadeOut">
            <!-- Portfolio Logo -->
            <img id="cover-logo" class="fadeOutFaster" src="{{ asset('images/global/logo.svg') }}" alt="Logo">
        </div>
    </body>
</html>
