@component('mail::message')
    # 🚀 Nuevo mensaje desde tu web

    @component('mail::panel')
        **Nombre:** {{ $data['from_name'] }}
        **Email:** <{{ $data['email'] }}>

        **Mensaje:**
        {{ $data['message'] }}
    @endcomponent

    @component('mail::subcopy')
        Este correo se generó automáticamente desde el formulario de contacto de [stellarprogress.es](https://stellarprogress.es)
    @endcomponent
@endcomponent
