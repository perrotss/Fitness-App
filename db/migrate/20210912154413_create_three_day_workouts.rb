class CreateThreeDayWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :three_day_workouts do |t|
      t.string :exercise
      t.integer :set
      t.integer :rep

      t.timestamps
    end
  end
end
