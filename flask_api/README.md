# My Flask API

## Descripción

Esta es una API construida con Flask, que incluye funcionalidades para manejar usuarios y autenticación con JWT, almacenando datos en una base de datos PostgreSQL.

---

## Estructura del Proyecto

```bash
/my_flask_api                    # Directorio raíz de la aplicación
│
├── /app                         # Directorio que contiene la lógica de la aplicación
│   ├── /models                  # Modelos de base de datos (definiciones de tablas y relaciones)
│   │   └── user.py              # Modelo que representa a un usuario en la base de datos
│   │
│   ├── /routes                  # Definición de las rutas/endpoints de la API
│   │   └── user_routes.py       # Rutas para manejar operaciones relacionadas con los usuarios
│   │
│   ├── /services                # Lógica de negocio de la aplicación
│   │   └── user_service.py      # Servicios para gestionar la lógica detrás de las operaciones de usuarios
│   │
│   ├── /utils                   # Utilidades y funciones auxiliares de la aplicación
│   │   └── db.py                # Funciones de utilidad para configurar y conectar a la base de datos
│   │
│   └── __init__.py              # Inicialización de la aplicación Flask y sus componentes
│
├── /config                      # Archivos de configuración de la aplicación
│   └── config.py                # Configuración general de la aplicación (claves, bases de datos, etc.)
│
├── .env                         # Archivo que contiene las variables de entorno (clave secreta, configuración de base de datos, etc.)
├── run.py                       # Script principal para iniciar la aplicación Flask
├── requirements.txt             # Archivo con las dependencias necesarias para el proyecto (Flask, Flask-SQLAlchemy, etc.)
└── README.md                    # Documento con la descripción del proyecto, instalación y guía de uso
```

---

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **Flask**: Framework web para Python.
- **Flask-SQLAlchemy**: Extensión de Flask para integrar SQLAlchemy.
- **Flask-Bcrypt**: Extensión de Flask para encriptación de contraseñas.
- **psycopg2-binary**: Controlador PostgreSQL para Python.
- **Flask-JWT-Extended**: Extensión de Flask para manejar tokens JWT.
- **python-dotenv**: Para cargar variables de entorno desde un archivo `.env`.
- **sqlalchemy-utils**: Utilidades adicionales para SQLAlchemy, como el tipo de dato UUID.

---

## Instalación

Sigue estos pasos para configurar el entorno de desarrollo.

### Requisitos previos

- **Python 3.x** instalado.
- Un sistema de gestión de bases de datos **PostgreSQL** funcionando.

### 1. Clona el repositorio

```bash
git clone <url-del-repositorio>
cd my_flask_api
```

### 2. Crea un entorno virtual

En Windows

```powershell
python -m venv venv
.\venv\Scripts\activate
```

en Linux / Mac OS

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Instala las dependencias

```bash
pip install -r requirements.txt
```

### 4. Configura el archivo .env

```python
DATABASE_URL=postgresql://user:password@localhost/dbname
SECRET_KEY=tu_clave_secreta
JWT_SECRET_KEY=tu_clave_secreta_jwt
```

### 5. Inicia la aplicación

```bash
python run.py
```

### 6. Accede a la API

```python
La aplicación estará disponible en http://127.0.0.1:5000.
```

---

## Desarrollo

Este proyecto está diseñado para facilitar el desarrollo de APIs RESTful con Flask. Si deseas agregar más funcionalidades, considera agregar más servicios dentro de la carpeta /services y crear nuevas rutas en /routes.
