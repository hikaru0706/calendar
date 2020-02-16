class RemovePolicynumberFromHospitalizations < ActiveRecord::Migration[5.0]
  def change
    remove_column :hospitalizations, :policynumber, :string
  end
end
