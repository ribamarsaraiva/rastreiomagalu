document.getElementById('rastreioForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const codigo = document.getElementById('codigo').value.trim();
  
  if (!codigo) {
    alert('Por favor, digite um código de rastreamento');
    return;
  }
  
  // Remove espaços em branco extras
  const codigoLimpo = codigo.replace(/\s+/g, '');
  
  // Redireciona para a página de rastreamento da Magalog
  const url = `https://cademinhaentrega.com.br/magalog/tracking/P/${codigoLimpo}`;
  
  window.open(url, '_blank');
});

// Opcional: Permite também clicar no Enter dentro do input
document.getElementById('codigo').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('rastreioForm').dispatchEvent(new Event('submit'));
  }
});