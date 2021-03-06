Types::MessageType = GraphQL::ObjectType.define do
  name "Message"

  field :id, !types.ID
  field :text, !types.String
  field :username, !types.String
end
