const resultado = document.getElementById('resultado');
const form = document.getElementById('calculadora');

// Adiciona efeito de clique nos botões
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'translateY(2px)';
    btn.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  });
  
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'translateY(-3px)';
    btn.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.2)';
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
    btn.style.boxShadow = '';
  });
});

function adicionar(valor) {
  resultado.textContent += valor;
  // Efeito de animação no display
  resultado.style.animation = 'none';
  void resultado.offsetWidth;
  resultado.style.animation = 'displayGlowFocus 0.5s';
}



