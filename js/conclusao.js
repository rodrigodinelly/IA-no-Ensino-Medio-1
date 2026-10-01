(function () {
  window.AppStorage.load();
  if (!window.AppStorage.get().tracks.usuario.completedTrack) window.location.href = './nivelamento.html';
  const restart = document.querySelector('#restart-journey');
  if (restart) restart.addEventListener('click', () => {
    if (confirm('Deseja reiniciar todo o percurso? Seu progresso deste projeto neste navegador será apagado.')) {
      window.AppStorage.clear();
      window.location.href = './nivelamento.html';
    }
  });
})();
