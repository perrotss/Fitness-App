class CreateBodyMassIndices < ActiveRecord::Migration[6.0]
  def change
    create_table :body_mass_indices do |t|
      t.integer :foot
      t.integer :inch
      t.integer :weight

      t.timestamps
    end
  end
end
