class CreateOutpatients < ActiveRecord::Migration[5.0]
  def change
    create_table :outpatients do |t|
      t.date :outpatient_day
      t.references :receipt, foreign_key: true

      t.timestamps
    end
  end
end
