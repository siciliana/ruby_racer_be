class Player < ActiveRecord::Base
  has_many :rounds
  has_many :games


  def self.authenticate(username)
    current_user = User.find_by_username(username)
    if current_user.username == username
      current_user
    else
      nil
    end
  end 
end

