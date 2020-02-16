class PoliciesController < ApplicationController
    
    #複数取得しているので複数形にしている。
    def index
        @policies=Policy.all
    end
    
     #取得しているのが単数なので単数系にしている。
    def show
        @policy=Policy.find(params[:id])
        @receipts = @policy.receipts #include any relationship that you're going to access in the view

    end
    
    def new
    end
    
    def create
    end
    
    def edit
    end
    
    def update
    end
    
    def destroy
    end
    
end
