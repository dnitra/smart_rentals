<div>
    Hello{{ $name }},
    <br>
    <br> {{-- use double space for line break --}}
    You have been invited to become <strong>{{ $role }}</strong> on this address:
    <br>
    <strong>{{ $street_and_number }}</strong>
    <br>
    <strong>{{ $city }}</strong>

    <br>
    <br>
    Use this link to accept the invitation <a href="{{ $link }}">{{ $link }}</a>
    <br>
    <br>
    Sincerly Yours,
    <br>
    Smart-rentals Team


</div>
