<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmitted;

class ContactController extends Controller
{
    /**
     * Handle a contact-form POST coming from the React app.
     * Returns JSON either way so the front-end can show a toast.
     */
    public function submit(Request $request)
    {
        $data = $request->validate([
            'from_name' => 'required|string|max:255',
            'email'     => 'required|email',
            'message'   => 'required|string|max:5000',
        ]);

        $recipient = config('mail.contact_form_to');   // no env() fallback

        Mail::to($recipient)->send(new ContactFormSubmitted($data));

        return response()->json(['message' => 'Message sent successfully.']);
    }
}
