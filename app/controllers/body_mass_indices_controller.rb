class BodyMassIndicesController < ApplicationController
  def new
    @bmi = BodyMassIndex.new
  end
end
