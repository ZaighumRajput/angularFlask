# This is where the application starts
import os

#from app.models import User, Role
from app import create_app, db
from flask.ext.script import Manager, Shell
from flask.ext.migrate import Migrate, MigrateCommand
from flask.ext.triangle import Triangle

from app import create_app



app = create_app(os.getenv('FLASK_CONFIG') or 'default')
manager = Manager(app)

def make_shell_context():
    return dict(app=app, db=db, User=User, Role=Role)
manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()
