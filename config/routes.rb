Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to:'policies#index'
    resources :policies
    
    get 'receipts/:id', to: 'receipts#show'

end
