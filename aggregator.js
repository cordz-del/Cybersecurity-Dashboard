// src/api/aggregator.js
const express = require('express');
const router = express.Router();

async function fetchAnomalyData() {
  const response = await fetch('https://your-backend-api.com/api/anomaly');
  return response.json();
}

async function fetchIncidentData() {
  const response = await fetch('https://your-backend-api.com/api/incident');
  return response.json();
}

router.get('/dashboard-data', async (req, res) => {
  try {
    const anomalyData = await fetchAnomalyData();
    const incidentData = await fetchIncidentData();
    res.json({ anomalyData, incidentData });
  } catch (error) {
    console.error("Error aggregating dashboard data:", error);
    res.status(500).json({ error: "Failed to retrieve dashboard data" });
  }
});

module.exports = router;
