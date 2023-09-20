class Config:
    # Define your database URI here
    SQLALCHEMY_DATABASE_URI = 'mysql://root:SQLpass6432@localhost:3306/mydb'
    # Other configuration options
    SECRET_KEY = 'your_secret_key'
    SQLALCHEMY_TRACK_MODIFICATIONS = False