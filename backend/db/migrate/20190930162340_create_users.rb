class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.float :x
      t.float :y
      t.float :score
      t.string :image_src

      t.timestamps
    end
  end
end
