<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class InvitationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public function __construct($access)
    {
        $this->access = $access;
        $this->roles = ["Owner", "Manager", "Tenant", "Applicant"];
    }


    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Invitation to become ' . $this->roles[$this->access->rented_property_user_role_id - 1],
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
        return $this->from($this->access->fromEmail, 'Smart-rentals')
            ->subject('Invitation to become ' . $this->roles[$this->access->rented_property_user_role_id - 1])
            ->markdown('mails.invitation')
            ->with([
                'name' => " " . $this->access->first_name,
                'link' => "https://www.smart-rentals.codeboot.cz/invite/" . $this->access->invite_link,
                'role' => $this->roles[$this->access->rented_property_user_role_id - 1],
                'street_and_number' => $this->access->rentedProperty->address->street_and_number,
                'city' => $this->access->rentedProperty->address->city,

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
