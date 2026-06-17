const goToScreen = (screenId) => {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.toggle('active', screen.id === screenId));
  document.querySelectorAll('.nav-token').forEach((button) => button.classList.toggle('active', button.dataset.screen === screenId));
};

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-screen]');
  if (!trigger) return;
  goToScreen(trigger.dataset.screen);
});
