@component('mail::message')
# Nuevo mensaje desde el formulario de contacto

**Nombre:** {{ $data['from_name'] }}

**Email:** {{ $data['email'] }}

**Mensaje:**

{{ $data['message'] }}

@endcomponent
