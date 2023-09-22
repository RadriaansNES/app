from flask import request, jsonify, Blueprint
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from models.users import User
from main import db 

#Blueprint for access through main
main_blueprint = Blueprint('main', __name__)

@main_blueprint.route('/register', methods=['POST'])
def register():
    print("Received registration request")
    data = request.json
    username = data['username']
    password = data['password']
    first_name = data['first_name']
    last_name = data['last_name']
    telephone = data.get('telephone')
    address = data.get('address')
    city = data.get('city')
    postal_code = data.get('postal_code')
    country = data.get('country')

    hashed_password = generate_password_hash(password, method='sha256')
    
    new_user = User(
        username=username,
        first_name=first_name,
        last_name=last_name,
        telephone=telephone,
        address=address,
        city=city,
        postal_code=postal_code,
        country=country,
        hashed_password=hashed_password,
        salt=None  
    )
    
    db.session.add(new_user)
    db.session.commit()
    return jsonify(message='Registration successful')

@main_blueprint.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']
    
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.hashed_password, password):  # No need to decode the hashed_password
        login_user(user)
        user.is_active = True  
        db.session.commit()
        
        user_info = {
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }

        print("User information retrieved from the database:", user_info)  

        return jsonify(message='Login successful', user_info=user_info), 200
    else:
        return jsonify(message='Login failed'), 401
    
# Go to login on failure (flask-login). 
@main_blueprint.route('/Account', methods=['GET'])
@login_required
def protected_route():
    if current_user.is_authenticated and current_user.is_active:
        user_info = {
            'username': current_user.username,
            'first_name': current_user.first_name,
            'last_name': current_user.last_name,
        }
        return jsonify(user_info), 200
    else:
        return jsonify(message='Login required or user not active'), 401