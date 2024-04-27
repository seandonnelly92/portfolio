class PortfolioController < ApplicationController
  skip_before_action :authenticate_user!, only: [:collabradors, :whatmatters ]

  def collabradors
  end

  def whatmatters
  end

  def charitybi
  end

  def donationapp
  end

  def portfolio
  end

  def ripples
  end
end
