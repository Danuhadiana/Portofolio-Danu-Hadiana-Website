// script.js
const menu = document.querySelector('nav ul');
const toggle = document.createElement('button');
toggle.textContent = '☰';
document.querySelector('header').prepend(toggle);

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const images = document.querySelectorAll('.gallery-grid img');
images.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
  });
});

images.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';

    // Tambahkan konten dengan tombol X
    modal.innerHTML = `
      <div style="position:relative;">
        <img src="${img.src}" style="max-width:90%; max-height:90%;">
        <span id="closeBtn" 
              style="position:absolute;top:10px;right:20px;
                     color:white;font-size:30px;
                     cursor:pointer;">&times;</span>
      </div>
    `;

    // Untuk tombol X biar engga didalam foto dan bisa diluar gambar
    modal.innerHTML = `
  <div style="position:relative;">
    <span id="closeBtn" 
          style="position:absolute;top:-40px;right:-10px;
                 color:white;font-size:40px;
                 cursor:pointer;">&times;</span>
    <img src="${img.src}" style="max-width:90%; max-height:90%;">
  </div>
`;


    document.body.appendChild(modal);

    // Event untuk tombol X
    const closeBtn = modal.querySelector('#closeBtn');
    closeBtn.addEventListener('click', () => modal.remove());
  });
});
