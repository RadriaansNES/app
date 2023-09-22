import os
from flask import Flask, render_template

from flask_login import LoginManager
from models.users import User, db
from flask_cors import CORS 
from config import Config

app = Flask(__name__, static_folder='../app/build/static', template_folder='../app/build')

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI', Config.SQLALCHEMY_DATABASE_URI)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', Config.SECRET_KEY)

CORS(app)  # Enable CORS


db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

if __name__ == '__main__':
    from routing.routeMain import main_blueprint  
    app.register_blueprint(main_blueprint)
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port)