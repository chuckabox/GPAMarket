document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <h1 style="color: #048BA8;">GPA Market</h1>
      <p>If you see this, your GitHub Page is working!</p>
      <div style="background: #f1f5f9; padding: 15px; border-radius: 12px; margin-top: 20px;">
        <p style="font-weight: bold;">Felix H. vs Elouise C.</p>
        <div class="split-bar">
          <div style="width: 65%; background: #048BA8;"></div>
          <div style="width: 35%; background: #F18F01;"></div>
        </div>
      </div>
    </div>
  `;
  
  console.log("GPAMarket script loaded successfully.");
});