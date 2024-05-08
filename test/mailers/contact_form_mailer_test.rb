require "test_helper"

class ContactFormMailerTest < ActionMailer::TestCase
  test "new_form_submission" do
    mail = ContactFormMailer.new_form_submission
    assert_equal "New form submission", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
