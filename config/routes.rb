Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")

  # Resource route for the contact form
  resources :contact_form, only: [:create], controller: 'contact_form'

  # Project Pages
  get "projects/collabradors", to: "projects#collabradors"
  get "projects/what-matters", to: "projects#whatmatters"
  get "projects/yes-gaffer", to: "projects#yesgaffer"
  get "projects/ripples", to: "projects#ripples"
  get "projects/charitybi", to: "projects#charitybi"
  get "projects/portfolio", to: "projects#portfolio"
end
