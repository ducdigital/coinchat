class Resolvers::CreateMessage < GraphQL::Function
  # arguments passed as "args"
  argument :text, !types.String

  # return type from the mutation
  type Types::MessageType

  def call(_obj, args, _ctx)
    Message.create!(
      text: args[:text],
      username: _ctx[:current_user]
    )
  end
end
