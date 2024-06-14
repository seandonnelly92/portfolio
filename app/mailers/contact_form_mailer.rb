class ContactFormMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_form_mailer.new_form_submission.subject
  #

  def new_form_submission(contact)
    @contact = contact

    mail(
      from: "#{@contact.name} <#{@contact.email}>",
      to:  "Sean Donnelly <sean_donnelly@hotmail.co.uk>",
      bcc: "Sean Donnelly <seandonnellywork@outlook.com>", "#{@contact.name} <#{@contact.email}>",
      subject: "Sean & #{@contact.name}")
  end
end
