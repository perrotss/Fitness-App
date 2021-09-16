class BodyMassIndicesController < ApplicationController
  def index
    @bmi = BodyMassIndex.new
  end
end
