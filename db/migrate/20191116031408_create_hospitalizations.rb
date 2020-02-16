class CreateHospitalizations < ActiveRecord::Migration[5.0]
  def change
    create_table :hospitalizations do |t|
      t.date :hospitalization_start
      t.date :hospitalization_end
      t.integer :hospitalization_days
      t.string :policynumber

      t.timestamps
    end
  end
end
