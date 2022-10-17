import numpy as np
import pathlib
import tensorflow as tf
import keras
from flask import url_for

class_names = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
ALLOWED_EXTENSIONS=set(['jpg', 'jpeg', 'png'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

def load_model():
    model = keras.models.load_model("." + url_for('static', filename='model'))
    return model

def predict(filepath):
    model = load_model()
    img_height = 180
    img_width = 180
    new_image_path = new_pokemon_path = pathlib.Path(filepath)
    img = keras.utils.load_img(
        new_pokemon_path, target_size=(img_height, img_width)
    )
    img_array = keras.utils.img_to_array(img)
    img_array = np.expand_dims(img_array, 0) 

    predictions = model.predict(img_array)
    score = tf.nn.softmax(predictions[0])
    guess = class_names[np.argmax(score)]
    return guess
