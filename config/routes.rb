Rails.application.routes.draw do
  get 'main/index'
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  root :to => 'main#index'
  mount ActionCable.server => '/websocket'
  resources :graphql

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
