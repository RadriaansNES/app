from flask import Flask
from config import Config
from flask_login import LoginManager
from models.users import User, db
from flask_cors import CORS 
app = Flask(__name__)
app.config.from_object(Config)


CORS(app) 

db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
 
    return User.query.get(int(user_id))

if __name__ == '__main__':
    from routing.routeMain import main_blueprint  
    app.register_blueprint(main_blueprint)
    app.run()