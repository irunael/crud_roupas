const CHAVE_ARMAZENAMENTO = 'gerenciadorRoupas';

export const obterRoupas = () => {
  const roupasArmazenadas = localStorage.getItem(CHAVE_ARMAZENAMENTO);
  try {
    return roupasArmazenadas ? JSON.parse(roupasArmazenadas) : [];
  } catch (e) {
    console.error("Erro ao parsear roupas:", e);
    return [];
  }
};

export const salvarRoupas = (roupas) => {
  try {
    const roupasParaSalvar = roupas.map(roupa => {
      if (roupa.imagem && roupa.imagem.length > 50000) {
        return {
          ...roupa,
          imagem: 'https://via.placeholder.com/300x300?text=Imagem+Grande'
        };
      }
      return roupa;
    });
    localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(roupasParaSalvar));
  } catch (e) {
    console.error("Erro ao salvar roupas:", e);
  }
};