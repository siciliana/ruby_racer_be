class CreateRounds < ActiveRecord::Migration
  def change
      create_table  :rounds do |t|
        t.string :game_id
        t.string :player_id
        t.timestamps
      end
  end
end
