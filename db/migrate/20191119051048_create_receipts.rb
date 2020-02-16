class CreateReceipts < ActiveRecord::Migration[5.0]
  def change
    create_table :receipts do |t|
      t.date :receipt_day
      t.references :policy, foreign_key: true

      t.timestamps
    end
  end
end
