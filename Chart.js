<!-- index.html snippet for chart -->
<canvas id="alertChart" width="400" height="200"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  async function loadChartData() {
    const response = await fetch('https://your-backend-api.com/api/dashboard-data');
    const data = await response.json();
    // Example: count alerts from anomalyData
    const alertCounts = data.anomalyData.alerts.map(a => a.count);
    const labels = data.anomalyData.alerts.map(a => a.category);

    const ctx = document.getElementById('alertChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Alert Counts',
          data: alertCounts,
          backgroundColor: '#FF6384',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }
  loadChartData();
</script>
