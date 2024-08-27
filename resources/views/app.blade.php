<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Aplikasi Laravel React JSx</title>

    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    @inertiaHead

</head>

<body class="body">
    @inertia

    <script src="{{ asset('template/vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('template/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('template') }}/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="{{ asset('template') }}/js/sb-admin-2.min.js"></script>
</body>

</html>
