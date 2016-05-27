# This is where where the blueprint sits 
from flask import Blueprint

main = Blueprint('main', __name__)

from . import views, errors
