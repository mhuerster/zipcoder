class CreateZipcodes < ActiveRecord::Migration
  def change
    create_table :zipcodes do |t|
      t.integer :zipcode
      t.string :city
      t.string :state
      t.timestamps null: false
    end
  end
end
