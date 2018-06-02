class Message < ApplicationRecord
  after_create { |record|
    CoinchatSchema.subscriptions.trigger("messageAdded", {}, record)
  }
end
