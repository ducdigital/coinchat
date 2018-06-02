Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :message, function: Resolvers::CreateMessage.new
end
