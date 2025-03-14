# auth.py (Flask)
from flask import Flask, request, jsonify
import jwt, datetime
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_jwt_secret'

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization', None)
        if not token:
            return jsonify({'error': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        except Exception as e:
            return jsonify({'error': 'Token is invalid!'}), 403
        return f(*args, **kwargs)
    return decorated

@app.route('/secure-data', methods=['GET'])
@token_required
def secure_data():
    return jsonify({'data': 'This is protected data.'})

if __name__ == '__main__':
    app.run(debug=True)
