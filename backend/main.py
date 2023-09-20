from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_login import LoginManager, UserMixin
from models.users import User
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    # Retrieve the user from the database based on user_id
    return User.query.get(int(user_id))

if __name__ == '__main__':
    app.run()  # Start the Flask applicatio