class Round < ActiveRecord::Base
  
  belongs_to :games
  belongs_to :players
end