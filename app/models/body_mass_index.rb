class BodyMassIndex < ApplicationRecord
    validates :feet, presence: true
    validates :inches, presence: true
    validates :pounds, presence: true
end
