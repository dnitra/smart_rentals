<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ApplicationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public function __construct($applicant, $property)
    {
        $this->applicant = $applicant;
        $this->property = $property;
    }


    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: "New applicant at your property ID: {$this->property->id}",
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    // public function content()
    // {
    //     return new Content(
    //         view: "view.name",
    //     );
    // }
    public function build()
    {
        return $this->from($this->applicant->email, 'Smart-rentals')
            ->subject("New applicant at your property ID: {$this->property->id}")
            ->markdown('mails.application')
            ->with([
                'link' => "www.smart-rentals.test/owner/dashboard/property/all/{$this->property->id}/",
                'name' => $this->applicant->name,
                'email' => $this->applicant->email,
                'phone' => $this->applicant->phone,
                'message' => $this->applicant->message,
                'street_and_number' => $this->property->address->street_and_number,
                'city' => $this->property->address->city,

            ]);
    }
    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
