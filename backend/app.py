from flask import Flask
from flask_cors import CORS
from flask_restful import Api

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'

cors = CORS(app, resources={r"*": {"origins": "*"}})

from api import GetPrediction

api = Api(app)
api.add_resource(GetPrediction, '/predict')
