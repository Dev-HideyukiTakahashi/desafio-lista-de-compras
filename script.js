const novoItem = document.getElementById('novoItem');
const novoItemBtn = document.getElementById('novoItemBtn');
const list = document.getElementById('list');
const alerta = document.querySelector('.alert');

novoItemBtn.addEventListener('click', () => {
  list.innerHTML += novoLi(novoItem.value);
  novoItem.value = '';
});

list.addEventListener('click', (e) => {
  if (e.target.closest('button')) {
    const item = e.target.closest('li');
    item.remove();

    alerta.classList.add('alert-show');

    setTimeout(() => {
      alerta.classList.remove('alert-show');
    }, 1000);
  }
});
function novoLi(novoItem) {
  return `
    <li>
      <input type="checkbox" />
      <div class="item"><p>${novoItem}</p></div>
      <button>
        <img src="./assets/icons/Frame-3.png" alt="Remover" />
      </button>
    </li>
  `;
}
