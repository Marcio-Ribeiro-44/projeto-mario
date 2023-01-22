const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkDoVideo = video.src;

const alternarModal = () => modal.classList.toggle('aberto');

botaoTrailer.addEventListener('click', event => {
  alternarModal(event);
  video.setAttribute('src', linkDoVideo);
});

botaoFecharModal.addEventListener('click', event => {
  alternarModal(event);
  video.setAttribute('src', '');
});
