const resultado = document.getElementById('resultado');
    const form = document.getElementById('calculadora');
    
    function adicionar(valor) {
        resultado.textContent += valor;
    }
    
    function limpar() {
        resultado.textContent = '';
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        try {
            const expressao = resultado.textContent.replace(/x/g, '*');
            resultado.textContent = eval(expressao);
        } catch {
            resultado.textContent = 'Erro';
        }
    });