class AddReceiptToHospitalizations < ActiveRecord::Migration[5.0]
  def change
    add_reference :hospitalizations, :receipt, foreign_key: true
  end
end
