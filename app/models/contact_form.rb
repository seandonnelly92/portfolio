class ContactForm
  # Includes ActiveModel::Model to make this plain Ruby object behave like an ActiveRecord model.
  # This is useful because it gives the class model-like behaivour e.g. validations and form helpers without the need for a DB.
  include ActiveModel::Model
  # Automatically converts the input to the data type we want (always strings)
  include ActiveModel::Attributes

  attribute :name, :string
  attribute :email, :string
  attribute :message, :string

  # Requires the presence of all three fields
  validates :name, :email, :message, presence: true
  # Ruby standard library RegExp for email
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
