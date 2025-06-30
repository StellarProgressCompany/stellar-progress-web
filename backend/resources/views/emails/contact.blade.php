@component('mail::message')

{{-- Header with logo (optional) --}}
@component('mail::header', ['url' => config('app.url')])
![Stellar Progress Logo]({{ asset('images/logo.png') }})
@endcomponent

# 🚀 Nuevo mensaje desde tu web

¡Tienes un nuevo mensaje de contacto! A continuación encontrarás los detalles:

@component('mail::panel')
| **Campo**      | **Información**                     |
| ------------- | ------------------------------------ |
| **Nombre**    | {{ $data['from_name'] }}            |
| **Email**     | <{{ $data['email'] }}>              |
| **Mensaje**   | {{ Str::limit($data['message'], 1000) }} |
@endcomponent

{{-- If message is longer, show full body below --}}
@if(strlen($data['message']) > 1000)
@component('mail::panel')
### Mensaje completo:
{{ $data['message'] }}
@endcomponent
@endif

@component('mail::subcopy')
Este correo se generó automáticamente desde el formulario de contacto de [Stellar Progress](https://stellarprogress.es).
@endcomponent

@component('mail::footer')
© {{ date('Y') }} Stellar Progress. Todos los derechos reservados.
@endcomponent

@endcomponent
