class Player < ActiveRecord::Base
  validates :name, uniqueness: { case_sensitive: false }
  has_many :games, through :rounds
  has_many :rounds
end
