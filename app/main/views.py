from datetime import datetime
from flask import render_template, session, redirect, url_for
from . import main
from .forms import NameForm



@main.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')
