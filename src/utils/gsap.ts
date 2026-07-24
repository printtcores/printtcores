import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Função utilitária para dividir texto em caracteres e palavras.
 * Se o SplitText oficial do GSAP Club não estiver instalado no projeto, 
 * esta função oferece um fallback nativo com a mesma estrutura de classes (.char, .word).
 */
export function splitTextFallback(element: HTMLElement): { chars: HTMLElement[]; words: HTMLElement[] } {
  const text = element.innerText;
  element.innerHTML = '';
  
  const words: HTMLElement[] = [];
  const chars: HTMLElement[] = [];

  const wordStrings = text.split(' ');
  wordStrings.forEach((wordStr, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'word';
    wordSpan.style.display = 'inline-block';
    wordSpan.style.whiteSpace = 'nowrap';

    Array.from(wordStr).forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'char';
      charSpan.style.display = 'inline-block';
      charSpan.textContent = char;
      wordSpan.appendChild(charSpan);
      chars.push(charSpan);
    });

    element.appendChild(wordSpan);
    words.push(wordSpan);

    if (wordIndex < wordStrings.length - 1) {
      const space = document.createTextNode(' ');
      element.appendChild(space);
    }
  });

  return { chars, words };
}

export { gsap, ScrollTrigger };
