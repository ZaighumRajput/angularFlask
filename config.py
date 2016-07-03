import os
basedir = os.path.abspath(os.path.dirname(__file__)) 


class Config:
	SECRET_KEY = os.environ.get('SECRET_KEY') or 'hard to guess string' 
	SQLAlCHEMY_COMMIT_ON_TEARDOWN = True



	@staticmethod
	def init_app(app):
		pass

class DevelopmentConfig(Config):
	DEBUG = True
	SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or \
			'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')






#will be passed to the Flask app
config = {
	'development' : DevelopmentConfig,
	#'testing': TestingConfig,
	#'production': ProductionConfig,
	'default': DevelopmentConfig
}
