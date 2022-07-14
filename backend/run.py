#!/usr/bin/env python
import backend
import os.path
import requests

backend.app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
backend.app.run(debug=True, host="::")
