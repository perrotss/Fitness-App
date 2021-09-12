class BodyMassIndicesController < ApplicationController
  def new
    @bmi = Bodymassindex.new
  end
end
