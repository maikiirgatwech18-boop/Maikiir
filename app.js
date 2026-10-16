// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/Maikiir/service-worker.js')
  .then(() => console.log('Service Worker Registered'))
  .catch(err => console.log('Service Worker Failed:', err));
}

// Install Button Logic for PWA
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';
});

installBtn.addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      installBtn.style.display = 'none';
    });
  }
});