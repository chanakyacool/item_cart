class Item < ApplicationRecord
  validates_presence_of :name, :description

  scope :by_name_or_desc, -> (query) { where('NAME LIKE :query OR DESCRIPTION LIKE :query', :query => "%#{query}%") }
end
