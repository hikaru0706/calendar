class Receipt < ApplicationRecord
  belongs_to :policy
  has_many :outpatients
  has_many :hospitalizations
  has_many :surgeries
  has_many :others
end
