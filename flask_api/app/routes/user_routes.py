from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

from app.services.user_service import create_user, get_user_by_username

user_bp = Blueprint("user_bp", __name__)


@user_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"error": "Username, email, and password are required"}), 400

    user = create_user(username, email, password)
    return jsonify(
        {"message": "User registered successfully", "user_id": str(user.id)}
    ), 201


@user_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    user = get_user_by_username(username)

    if user and user.check_password(password):
        access_token = create_access_token(identity=str(user.id))
        return jsonify(
            {"message": "Login successful", "access_token": access_token}
        ), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401


@user_bp.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    return jsonify({"message": f"Hello, {current_user_id}!"}), 200
