# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191119093430) do

  create_table "hospitalizations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date     "hospitalization_start"
    t.date     "hospitalization_end"
    t.integer  "hospitalization_days"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.integer  "receipt_id"
    t.index ["receipt_id"], name: "index_hospitalizations_on_receipt_id", using: :btree
  end

  create_table "outpatients", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date     "outpatient_day"
    t.integer  "receipt_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["receipt_id"], name: "index_outpatients_on_receipt_id", using: :btree
  end

  create_table "policies", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "comment"
    t.string   "name"
    t.date     "birthdate"
    t.date     "contractdate"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "receipts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date     "receipt_day"
    t.integer  "policy_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["policy_id"], name: "index_receipts_on_policy_id", using: :btree
  end

  create_table "surgeries", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date     "surgery_day"
    t.integer  "receipt_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["receipt_id"], name: "index_surgeries_on_receipt_id", using: :btree
  end

  add_foreign_key "hospitalizations", "receipts"
  add_foreign_key "outpatients", "receipts"
  add_foreign_key "receipts", "policies"
  add_foreign_key "surgeries", "receipts"
end
