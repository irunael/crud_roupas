const CHAVE_ARMAZENAMENTO = 'gerenciadorRoupas';

export const obterRoupas = () => {
  const roupasArmazenadas = localStorage.getItem(CHAVE_ARMAZENAMENTO);
  return roupasArmazenadas ? JSON.parse(roupasArmazenadas) : [];
};

export const salvarRoupas = (roupas) => {
  localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(roupas));
};