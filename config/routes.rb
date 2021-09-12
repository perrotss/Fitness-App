Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'body_mass_indices#index'
  resources :body_mass_indices
  resources :three_day_workouts
  resources :five_day_workouts
end
