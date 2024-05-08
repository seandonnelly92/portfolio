class ContactFormController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]

  def create
    @contact = ContactForm.new(contact_params)
      if @contact.valid?
        # Call the new_form_submission on the Contact Form Mailer
        ContactFormMailer.new_form_submission(@contact).deliver_now
        redirect_to root_path, notice: "Thanks for your message. I usually respond within 24 hours."
      else
        flash.now[:alert] = 'There was a problem with your message. Contact me on Linkedein.'
        render :new
      end
  end

  private

  def contact_params
    params.require(:contact_form).permit(:name, :email, :message)
  end
end
