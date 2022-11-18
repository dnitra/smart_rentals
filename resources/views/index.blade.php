<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>HOME</title>
</head>
<body>
  
    <div id="root"></div>
    @viteReactRefresh
    @vite('resources/js/index.jsx')
<script type="text/javascript">      
  window.csrf_token = '{{ csrf_token() }}'
</script>
</body>
</html>