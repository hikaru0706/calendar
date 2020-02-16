class AddReceiptIdToHospitalizations < ActiveRecord::Migration[5.0]
  def change
    add_column :hospitalizations, :receipt_id, :string
  end
end
