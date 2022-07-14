import os
import re
import uuid
import time
import subprocess
import sys
import unicodedata
import json
from flask import Flask, flash, request, redirect, url_for, send_from_directory, make_response, jsonify

UPLOAD_FOLDER = 'tmp/'
ALLOWED_EXTENSIONS = set(['wav', 'mp3', 'flac'])
MODEL_PATH = os.path.join(os.getcwd(), "model/output_graph.pb")
SCORER_PATH = os.path.join(os.getcwd(), "model/kenlm-tamil.scorer")


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
transcription_in_progress = False
print(transcription_in_progress)

if os.path.isfile(MODEL_PATH) and os.path.isfile(SCORER_PATH):
    print("DeepSpeech model and scorer found!")
else:
    print(MODEL_PATH, SCORER_PATH)
    sys.exit('No DeepSpeech Model and scorer found, please check models folder!')

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods = ['POST'])
def upload_file():
    # check if the post request has the file part
     if request.method == 'POST':
        if 'fileUpload' not in request.files:
            return redirect(request.url)
        
        f = request.files['fileUpload']
        f.save(os.path.join(os.getcwd(), UPLOAD_FOLDER, f.filename))
    
        return transcribe(f.filename)
    
def transcribe(filename):
    global transcription_in_progress
    print("Starting transcription...")
    transcription_in_progress = True
    
    filePath = os.path.join(os.getcwd(), UPLOAD_FOLDER, filename)
    
    #start new process for transcription
    cmd = 'deepspeech --model ' + MODEL_PATH + ' --scorer ' + SCORER_PATH + ' --audio ' + filePath + ' > result.txt' 
    print('Command:', cmd)
    os.system(cmd)
    data = []
    with open('result.txt', encoding='utf-8') as f:
        data = f.read()
    
    u = data[:-1].strip()
    os.remove(filePath)
    transcription_in_progress = False
    return make_response(u)


# Return a JSON error rather than a HTTP 404
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)
