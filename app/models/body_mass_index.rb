class BodyMassIndex < ApplicationRecord
    validates :feet, presence: true
    validates :inches, presence: true
    validates :pounds, presence: true
    validates :feet, numericality: { only_integer: true }
    validates :inches, numericality: { only_integer: true }
    validates :pounds, numericality: { only_integer: true }
end
