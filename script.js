let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addList_form = document.getElementById('addList_form');
let root = document.getElementById('root');

subtitle = new Date().toLocaleDateString();

let data_list_belanja = [];

floating_button.addEventListener('click', () => {
  console.info(modal.style.display);

  if (modal.style.display == 'flex') {
    hideModal();
    return;
  }

  showModal();
});

modal_bg.addEventListener('click', () => {
  hideModal();
});

addList_form.addEventListener('submit', (event) => {
  event.preventDefault();

  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });
  console.info(data_list_belanja);

  event.target.barang.value = '';
  event.target.harga.value = '';
  hideModal();
  renderToHtml();
});

function showModal() {
  console.info('ddwdw');
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'gray';
  floating_button.style.transform = 'rotate(45deg)';
}

function hideModal() {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = '#F280B6';
  floating_button.style.transform = 'rotate(0deg)';
}

function renderToHtml() {
  root.innerHTML = '';

  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class="card">
      <small> ${e.tanggal} </small>
      <div>
        ${e.nama_barang}  <span> Rp. ${e.harga_barang} </span>
      </div>
      <button onclick="handleDelete(${i})">Selesai</button>
    </div>
    `;
  });
}

function handleDelete(index) {
  data_list_belanja.splice(index, 1);
  renderToHtml();
}
