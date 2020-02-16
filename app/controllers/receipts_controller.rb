class ReceiptsController < ApplicationController
  
  #複数取得しているので複数形としている
  def index
    @receipts=Receipt.all
  end

  #eager loadingをしている。
  def show
    @receipt = Receipt.find(params[:id])
    @hospitalizations=@receipt.hospitalizations
    @outpatients=@receipt.outpatients
    @surgeries=@receipt.surgeries
  end

  def new
    @receipt = Receipt.new
    @hospitalizations=@receipt.hospitalizations
    @outpatients=@receipt.outpatients
    @surgeries=@receipt.surgeries
    
  end

  def create
    @receipt = Receipt.new(message_params)

    if @receipt.save
      flash[:success] = 'Receipt が正常に投稿されました'
      redirect_to @receipt
    else
      flash.now[:danger] = 'Receipt が投稿されませんでした'
      render :new
    end
  end

  def edit
      @receipt = Receipt.find(params[:id])
  end

  def update
      @receipt = Receipt.find(params[:id])

    if @receipt.update(message_params)
      flash[:success] = 'Message は正常に更新されました'
      redirect_to @receipt
    else
      flash.now[:danger] = 'Message は更新されませんでした'
      render :edit
    end
  end

  def destroy
    @receipt = Receipt.find(params[:id])
    @receipt.destroy

    flash[:success] = 'Receipt は正常に削除されました'
    redirect_to receipts_url
  end

 private

  # Strong Parameter
  def message_params
    params.require(:message).permit(:content)
  end    
    
    
end
