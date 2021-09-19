class FixColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :body_mass_indices, :foot, :feet
    rename_column :body_mass_indices, :inch, :inches
    rename_column :body_mass_indices, :weight, :pounds
  end
end
