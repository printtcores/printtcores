import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configurações padrão do Astro 5
  // Suporte a SASS é automático através da extensão .scss e do pacote dev 'sass'
  image: {
    // Domínios autorizados para otimização de imagem se necessário
    domains: [],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
