Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :messages, !types[Types::MessageType] do
    argument :limit, !types.Int

    resolve -> (obj, args, ctx) {
      latest_limit = args[:limit] || 5
      Message.last(latest_limit)
    }
  end
end
