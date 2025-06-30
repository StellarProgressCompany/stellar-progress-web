<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public array $data;

    /**
     * Create a new message instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     */
    public function build(): static
    {
        return $this
            ->subject('New message from ' . $this->data['from_name'])
            ->markdown('emails.contact')        // HTML Markdown view
            ->text('emails.contact_plain')      // plain-text fallback
            ->with(['data' => $this->data]);    // pass data to the views
    }
}
