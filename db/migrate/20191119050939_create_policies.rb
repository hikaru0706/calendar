class CreatePolicies < ActiveRecord::Migration[5.0]
  def change
    create_table :policies do |t|
      t.string :comment
      t.string :name
      t.date :birthdate
      t.date :contractdate

      t.timestamps
    end
  end
end
