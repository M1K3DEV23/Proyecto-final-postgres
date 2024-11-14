from app.models.user import User
from app.utils.db import db


def create_user(username, email, password):
    """
    Create a new user and store it in the database.

    Args:
        username (str): The username for the new user.
        email (str): The email address for the new user.
        password (str): The password for the new user.

    Returns:
        User: The created User object.
    """
    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return user


def get_user_by_username(username):
    """
    Retrieve a user by username.

    Args:
        username (str): The username of the user to retrieve.

    Returns:
        User or None: The User object associated with the given username or None if no such user exists.
    """
    return User.query.filter_by(username=username).first()
