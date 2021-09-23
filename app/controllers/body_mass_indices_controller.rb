class BodyMassIndicesController < ApplicationController
  
  def index
    @bmi = BodyMassIndex.new
  end

  def create
  end

  private

  def bmi_params
    params.require(:bmi).permit(:feet, :inches, :pounds)
  end
end
