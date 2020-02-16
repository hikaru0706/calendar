class RemoveReceiptIdFromHospitalizations < ActiveRecord::Migration[5.0]
  def change
    remove_column :hospitalizations, :receipt_id, :string
  end
end
