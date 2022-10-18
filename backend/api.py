from flask import request
from flask_restful import Resource
from werkzeug.utils import secure_filename
import os
from utils import allowed_file, predict

class GetPrediction(Resource):

    def post(self):
        from app import app

        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            output = predict(file_path)
            return {"prediction": output}, 200
        return {}, 400
