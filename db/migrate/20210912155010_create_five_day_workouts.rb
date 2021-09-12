class CreateFiveDayWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :five_day_workouts do |t|
      t.string :excercise
      t.integer :set
      t.integer :rep

      t.timestamps
    end
  end
end
