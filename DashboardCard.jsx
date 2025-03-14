// DashboardCard.jsx
import React, { useState, useEffect } from 'react';

const DashboardCard = () => {
  const [alerts, setAlerts] = useState([]);

  const fetchAlerts = async () => {
    try {
      const res = await fetch('https://your-backend-api.com/api/threat-alerts');
      const data = await res.json();
      setAlerts(data.alerts);
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  useEffect(() => {
    fetchAlerts();
    const intervalId = setInterval(fetchAlerts, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card">
      <h2>Threat Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert.message} - {alert.severity}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardCard;
