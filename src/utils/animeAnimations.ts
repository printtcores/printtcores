import { animate, stagger, random } from 'animejs';

/**
 * Animação de partículas CMYK no hero ou elementos interativos com Anime.js v4
 */
export function initCmykParticles(container: HTMLElement) {
  if (!container) return;

  const colors = ['#e5007d', '#00a3e0', '#ffd100', '#7000ff', '#ff5800'];
  const particleCount = 14;

  container.innerHTML = '';

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.className = 'cmyk-particle';
    const size = Math.floor(Math.random() * 8) + 6;
    const color = colors[i % colors.length];

    p.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background-color: ${color};
      opacity: 0.6;
      pointer-events: none;
      left: ${Math.random() * 90}%;
      top: ${Math.random() * 90}%;
    `;

    container.appendChild(p);
  }

  animate(container.querySelectorAll('.cmyk-particle'), {
    translateX: () => random(-35, 35),
    translateY: () => random(-35, 35),
    scale: [0.8, 1.5],
    opacity: [0.3, 0.9],
    alternate: true,
    loop: true,
    ease: 'easeInOutSine',
    delay: stagger(150),
    duration: () => random(2500, 4500)
  });
}

/**
 * Animação de onda/stagger para cards ao passar o mouse com Anime.js v4
 */
export function animateCardBounce(element: Element) {
  animate(element, {
    scale: [1, 1.03, 1.01],
    rotate: [0, -1, 1, 0],
    duration: 700,
    ease: 'outElastic(1, 0.6)'
  });
}

/**
 * Animação de brilho e pulso para ícones e badges com Anime.js v4
 */
export function pulseIcon(target: Element) {
  animate(target, {
    rotate: [0, -12, 12, -6, 6, 0],
    scale: [1, 1.15, 1],
    duration: 900,
    ease: 'inOutQuad'
  });
}
