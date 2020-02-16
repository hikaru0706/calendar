class CreateSurgeries < ActiveRecord::Migration[5.0]
  def change
    create_table :surgeries do |t|
      t.date :surgery_day
      t.references :receipt, foreign_key: true

      t.timestamps
    end
  end
end
