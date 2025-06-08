const eye = document.querySelector('.eye');
const pupil = document.querySelector('.pupil');

document.addEventListener('mousemove', (e) => {
  const eyeRect = eye.getBoundingClientRect();

  const centerX = eyeRect.left + eyeRect.width / 2;
  const centerY = eyeRect.top + eyeRect.height / 2;

  const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

  const maxDistance = 30;
  const pupilX = Math.cos(angle) * maxDistance;
  const pupilY = Math.sin(angle) * maxDistance;

  pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});
