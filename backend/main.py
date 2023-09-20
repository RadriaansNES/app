from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_login import LoginManager, UserMixin
from models import User

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    # Retrieve the user from the database based on user_id
    return User.query.get(int(user_id))