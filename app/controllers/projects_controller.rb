class ProjectsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:collabradors, :whatmatters, :yesgaffer, :ripples, :charitybi, :donationapp ]
  def collabradors
  end

  def whatmatters
  end

  def yesgaffer
  end

  def ripples
  end

  def portfolio
  end

  def charitybi
  end

  def donationapp
  end
end
