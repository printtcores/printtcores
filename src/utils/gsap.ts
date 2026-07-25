import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Função utilitária para dividir texto em caracteres e palavras.
 * Preserva elementos HTML como <br /> e <em> para evitar que as palavras fiquem coladas.
 */
export function splitTextFallback(element: HTMLElement): { chars: HTMLElement[]; words: HTMLElement[] } {
  const chars: HTMLElement[] = [];
  const words: HTMLElement[] = [];

  function processNode(node: Node, container: HTMLElement) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      // Separar por sequências de espaços sem perder a informação do espaço
      const parts = text.split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          container.appendChild(document.createTextNode(' '));
        } else {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'word';
          wordSpan.style.display = 'inline-block';

          Array.from(part).forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.style.display = 'inline-block';
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            chars.push(charSpan);
          });

          container.appendChild(wordSpan);
          words.push(wordSpan);
        }
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      if (el.tagName.toLowerCase() === 'br') {
        container.appendChild(document.createElement('br'));
      } else {
        const cloneEl = el.cloneNode(false) as HTMLElement;
        container.appendChild(cloneEl);
        Array.from(el.childNodes).forEach((child) => processNode(child, cloneEl));
      }
    }
  }

  const originalChildren = Array.from(element.childNodes);
  element.innerHTML = '';
  originalChildren.forEach((child) => processNode(child, element));

  return { chars, words };
}

export { gsap, ScrollTrigger };
