Rails.application.routes.draw do
  # resources :ships
  # resources :users

  get('all-users', to: 'users#get_users')
  post('make-user', to: 'users#create_user')
  get('/users/:id', { to: 'users#show'})
  patch('/users/:id', { to: 'users#update' })

  # resources :sessions, only: [:new, :create, :destroy]

  # get 'signup', to: 'users#new', as: 'signup'
  # get 'login', to: 'sessions#new', as: 'login'
  # get 'logout', to: 'sessions#destroy', as: 'logout'
  # post('/authenticate', to: 'users#authenticate')

end
