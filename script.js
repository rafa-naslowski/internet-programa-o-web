function adicionarItem() {
    const input = document.getElementById('novoItem');
    const lista = document.getElementById('lista');

    if (input.value === '') {
        alert('Por favor, digite o nome de um jogo.');
    } else {
        const novoItem = document.createElement('li');
        novoItem.textContent = input.value;
        lista.appendChild(novoItem);
        input.value = '';
    }
}
