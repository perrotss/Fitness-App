class BodyMassIndicesController < ApplicationController
  before_action :set_bmi, only %i[create new]
  
  def index
    @bmi = BodyMassIndex.new
  end

  def create
    raise
  end

  private
  def set_bmi
    @bmi = BodyMassIndex.find(params[:id])
  end
  
  def bmi_params
    params.require(:bmi).permit(:feet, :inches, :pounds)
  end
end
