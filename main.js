if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  // You can show your custom install button here
  console.log('Install prompt captured');
});

function saveCheckIn() {
  const now = new Date();
  alert('Clock-in saved at: ' + now.toISOString());
  // Add offline storage or sync logic here
}