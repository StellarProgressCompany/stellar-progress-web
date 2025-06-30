{{-- resources/views/emails/contact.blade.php --}}

@component('mail::message')
# 🚀 Nuevo mensaje desde tu web

**Nombre:** {{ $data['from_name'] }}  
**Email:** <{{ $data['email'] }}>

@component('mail::panel')
{{ $data['message'] }}
@endcomponent

@component('mail::subcopy')
Este correo se generó automáticamente desde el formulario de contacto de
[stellarprogress.es](https://stellarprogress.es)
@endcomponent
@endcomponent
