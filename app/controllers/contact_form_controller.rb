class ContactFormController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]

  def create
    @contact = ContactForm.new(contact_params)
      if @contact.valid?
        # Call the new_form_submission on the Contact Form Mailer
        ContactFormMailer.new_form_submission(@contact).deliver_now
        redirect_to root_path, notice: "Thanks for your message. I usually respond within 24 hours."
      else
      flash[:alert] = 'There was a problem sending your message. Is your email address correct?'
      flash[:form_errors] = @contact.errors.full_messages
      redirect_back fallback_location: root_path
      end
  end

  private

  def contact_params
    params.require(:contact_form).permit(:name, :email, :message)
  end
end
