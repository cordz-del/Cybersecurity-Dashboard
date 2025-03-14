# threat_data_api.py
from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/api/threat-data', methods=['GET'])
def threat_data():
    try:
        anomaly_response = requests.get("https://your-backend-api.com/api/anomaly")
        incident_response = requests.get("https://your-backend-api.com/api/incident")
        data = {
            "anomalyData": anomaly_response.json(),
            "incidentData": incident_response.json()
        }
        return jsonify(data)
    except Exception as e:
        print("Error fetching threat data:", e)
        return jsonify({"error": "Failed to fetch threat data"}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
