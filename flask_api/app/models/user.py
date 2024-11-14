import uuid

from flask_bcrypt import check_password_hash, generate_password_hash
from sqlalchemy_utils import UUIDType

from app.utils.db import db


class User(db.Model):
    __tablename__ = "users"  # Especificamos el nombre de la tabla

    id = db.Column(UUIDType(binary=False), primary_key=True, default=uuid.uuid4)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def set_password(self, password):
        """Set the password for the user.

        Args:
            password (str): The new password.

        """
        self.password_hash = generate_password_hash(password).decode("utf-8")

    def check_password(self, password):
        """Check if a password matches the stored hash.

        Args:
            password (str): The password to check.

        Returns:
            bool: Whether the password matches the stored hash.
        """
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        """Return a string representation of the User.

        This is used to provide a nice string representation of the user when
        printing the object or logging it.

        Returns:
            str: A string representation of the User.

        """
        return f"<User {self.username}>"
