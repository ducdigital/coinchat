Types::SubscriptionType = GraphQL::ObjectType.define do
  name "Subscription"

  field :messageAdded do
    type !Types::MessageType
    description 'New chat message received!'
  end
end
