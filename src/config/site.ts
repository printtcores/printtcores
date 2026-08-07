/**
 * Configuração centralizada do site Printt Cores.
 * Altere os valores aqui para atualizar em todo o projeto.
 */

export const SITE_CONFIG = {
  name: "Printt Cores",
  tagline: "Gráfica & Estúdio de Impressão Premium em Salvador",
  
  contact: {
    phone: "(71) 98706-8000",
    phoneRaw: "+5571987068000",
    whatsappNumber: "5571987068000",
    email: "falecom@printtcores.com.br",
    whatsappDefaultMessage: "Olá! Gostaria de solicitar um orçamento para impressão gráfica.",
  },

  get whatsappLink() {
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(this.contact.whatsappDefaultMessage)}`;
  },

  get telLink() {
    return `tel:${this.contact.phoneRaw}`;
  },

  address: {
    shopping: "Apipema Center",
    street: "Rua Professor Sabino Silva, 836",
    bairro: "Ondina",
    city: "Salvador",
    state: "Bahia",
    cep: "40169-610",
    fullAddress: "Rua Professor Sabino Silva, 836 Ondina, Salvador - Bahia",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Professor+Sabino+Silva,+836+Ondina,+Salvador+-+Bahia",
  },

  social: {
    instagram: "https://instagram.com/printtcores",
    facebook: "https://facebook.com/printtcores",
    linkedin: "https://linkedin.com/company/printtcores",
  }
};
