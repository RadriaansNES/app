from main import db  # Import the db object from your application

class User(db.Model):  # Inherit from db.Model
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    telephone = db.Column(db.Integer)
    address = db.Column(db.String(50))
    city = db.Column(db.String(50))
    postal_code = db.Column(db.String(50))
    country = db.Column(db.String(50))
    hashed_password = db.Column(db.String(128), nullable=False)  # Change to db.String for hashed_password
    salt = db.Column(db.String(128))  # Change to db.String for salt

    def __init__(self, username, first_name, last_name, telephone, address, city, postal_code, country, hashed_password, salt):
        self.username = username
        self.first_name = first_name
        self.last_name = last_name
        self.telephone = telephone
        self.address = address
        self.city = city
        self.postal_code = postal_code
        self.country = country
        self.hashed_password = hashed_password
        self.salt = salt
