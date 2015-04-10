class ZipcodesController < ApplicationController

  def lookup
    query =  params[:zipcode].to_i
    @zipcode = Zipcode.where(:zipcode => query).first
    if @zipcode.blank?
      flash[:alert] = "Oops! Doesn't look like that's a zipcode."
      redirect_to root_path
    else
      render "index"
    end
  end
end
