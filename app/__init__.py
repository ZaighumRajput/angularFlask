# This is where teh application factory function lives
# Import all the necessary Flask extenstions here

from flask import Flask, render_template
from flask.ext.bootstrap import Bootstrap
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.triangle import Triangle

from config import config


db = SQLAlchemy()
triangle = Triangle()

def create_app(config_name):
	app = Flask(__name__, static_path='/static')
	app.config.from_object(config[config_name])
        
        triangle.init_app(app)

        db.init_app(app)
	from main import main as main_blueprint
	app.register_blueprint(main_blueprint)

	return app
