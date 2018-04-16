class CreateGoogleMapGenerators < ActiveRecord::Migration[5.2]
  def change
    create_table :google_map_generators do |t|

      t.timestamps
    end
  end
end
