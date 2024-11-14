from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from app.routes.user_routes import user_bp
from app.utils.db import db
from config.config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    jwt = JWTManager(app)

    CORS(app) # Enable CORS

    app.register_blueprint(user_bp, url_prefix="/api")

    with app.app_context():
        db.create_all()
    return app
